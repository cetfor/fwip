const antlr4 = require('antlr4/index');
const crypto = require('crypto');
const fs = require('fs');
const glob = require('glob');
const hookStd = require('hook-std');
const htmlparser = require("htmlparser2");
const path = require('path');
const program = require('commander');
const scrape = require('website-scraper');

const { FwIPListener } = require("./src/fwiplistener");
const { FwIPListenerDebug } = require("./src/fwipdebug");
const { JavaScriptLexer } = require("./src/antlr/JavaScriptLexer");
const { JavaScriptParser } = require("./src/antlr/JavaScriptParser");

// Files with these names will not be analyzed
const ingoredFiles = [
  'bootstrap.js',
  'bootstrap.min.js',
  'jquery.js',
  'jquery.min.js',
]

function readFile(file) {
  const filePath = path.join(`${__dirname}`, `${file}`);

  if (!fs.existsSync(filePath)) {
    console.log(`ERROR: Unable to locate "${filePath}."`);
    return null;
  }

  if (!fs.lstatSync(filePath).isFile()) {
    console.log(`ERROR: "${filePath}" is not a valid file.`);
    return null;
  }
  
  const script = fs.readFileSync(filePath, "utf8");

  // check if the input file is html, if so, extract any javascript.
  if (file.split('.').pop().toLowerCase() == 'html') {
    let extractedJsCode = "";
    let inJsScriptTag = false;
    const parser = new htmlparser.Parser({
      onopentag: function(name, attribs) {
        // To limit script tags with specific attributes types, use:
        // attribs.type === "application/javascript" and/or attribs.type === "text/javascript"
        if (name === "script") {
          inJsScriptTag = true;
        }
      },
      ontext: function(text) {
        if (inJsScriptTag) {
          extractedJsCode += text.toString() + "\n";
        }
      },
      onclosetag: function(tagname) {
        if (tagname === "script") {
          inJsScriptTag = false;
        }
      }
    }, {decodeEntities: true});
    parser.write(script);

    if (extractedJsCode !== "") {
      return extractedJsCode;
    }
  }
  
  return script;
}

// We use `hook-std` to suppress stderr because basic syntax errors will print warnings.
// Even when the JavaScript interpretor will handle these minor syntax errors.
// These can be extremely annoying when looking for "real problems" in code.
// If you want access to stderr messages, you can print `errorMsg` or just delete this block of code.
hookStd.stderr(errorMsg => {
  // console.log(errorMsg);
});

program
  .option('-a, --analyze [file]', 'Analyze a target file or directory of files')
  .option('-s, --scrape [url]', 'Scrape a target URL')
  .option('-d, --debug', 'Print debug strings (analyzers will not run in this mode)')
  .version('FwIP v1.0.0', '-v, --version')
  .parse(process.argv);

if (program.analyze) {
  const scripts = new Array();
  program.analyze = program.analyze.split(' ').join(''); // strip white space
  input = program.analyze.split(','); // split on commas

  let skippedCount = 0;
  const skippedFiles = new Array();
  input.forEach(item => { 
    if (fs.lstatSync(item).isDirectory()) {
      dir = path.join('.', `${item}`);
      
      let jsFiles = glob.sync( `${dir}/**/*.js`);
      let htmlFiles = glob.sync( `${dir}/**/*.*html`);
      let files = [];
      files = files.concat(jsFiles);
      files = files.concat(htmlFiles);

      files.forEach(file => {
        if (ingoredFiles.indexOf(path.basename(file)) >= 0) {
          console.log(`Ignoring file ${file}`);
          skippedCount += 1;
          skippedFiles.push(path.basename(file));
        } else {
          scripts.push(file);
        }
      })
    } else if (fs.lstatSync(item).isFile()) {
      if (ingoredFiles.indexOf(item) >= 0) {
        console.log(`Ignoring file ${item}`);
      } else {
        scripts.push(item);
      }
    }
  })
  
  let errorCount = 0
  let successCount = 0
  const errorFiles = new Array();
  scripts.forEach(s => {
    const script = readFile(s);
    if (script) {
      console.log(`Analyzing file ${s}`);
      try {
        const inputStream = new antlr4.InputStream(script);
        const lexer = new JavaScriptLexer(inputStream);
        lexer.strictMode = false;
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new JavaScriptParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.program();
        
        // Print the LISP-like tree
        //console.log(tree.toStringTree(parser.ruleNames));

        // Walk the Parse Tree with the FwIPListenerDebug or FwIPListener enabled
        let listener = null;
        if (program.debug) {
          listener = new FwIPListenerDebug();
        } else {
          listener = new FwIPListener();
        }
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        successCount += 1;
      } catch (ex) {
        console.log("ERROR: Encountered an unhandled expection while parsing file %s.", s);
        console.log(ex);
        errorCount += 1;
        errorFiles.push(s);
      }
    }
  });
  
  // Print some stats about analysis
  console.log("\nFinished analyzing %d file(s) with %d error(s) and %d skipped file(s).", successCount, errorCount, skippedCount);
  if (errorCount > 0) {
    console.log("Unable to parse the following files:");
    errorFiles.forEach(ef => {
      console.log("  - %s", ef);
    })
  }
  
  if (skippedCount > 0) {
    console.log("The following files were skipped:");
    skippedFiles.forEach(sf => {
      console.log("  - %s", sf);
    })
  }
}

else if (program.scrape) {
  console.log("Scraping URL '%s'...", program.scrape)

  const hash = crypto.createHash('md5').update(program.scrape).digest("hex");
  const options = {
    directory: `./scraped/${hash}`,
    maxRecursiveDepth: 1,
    recursive: true,
    sources: [
      {selector: 'script', attr: 'src'}
    ],
    urls: [program.scrape],
  };

  scrape(options)
  .then((result) => {
    const savePath = path.join('scraped', `${hash}`)
    console.log(`Target URL scraped and saved to ${savePath}`);
    console.log(`To analyze, run: node fwip.js -a ${savePath}`);
  })
  .catch((err) => {
    const savePath = path.join('scraped', `${hash}`)
    console.log(`Target URL (${program.scrape}) alreadt exists in ${savePath}. Delete it to rescrape.`)
    console.log(`To reanalyze, run: node fwip.js -a ${savePath}`);
  })
}

else {
  program.help();
}
