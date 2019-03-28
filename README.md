# Fun with Improvisational Parsers (FwIP)

FwIP is a proof-of-concept application that aims to illustrate how to parse formal computer languages in order to look for bugs. Specifically, `fwip` targets JavaScript, but the concepts used in this project can be applied to any programming language. 

The concepts behind `fwip` and `fwip` itself were presented at Columbus OWASP on 28 March 2019. Similar concepts will be presented at the [2019 Central Ohio InfoSec Summit](https://www.infosecsummit.com/ehome/index.php?eventid=367886&) 23-24 May. If you're in the area, please come and check it out!

# Installing and Using FwIP

FwIP is written in `Node.js`, which requires you to have `Node.js` installed on your system. `Node.js` comes with `NPM` a package manager that will fetch all required dependencies for you. Once you have `node.js` installed, clone this repo, run `npm install` in the root directory and run the cli `node fwip.js`.

```
$ git clone https://github.com/cetfor/fwip
$ cd fwip
$ npm install
$ node fwip.js -h
$ node fwip.js -a .\examples\owasp.html
```

# Analyzing Local Files

`fwip` can analyze a single file or a batch of files. It specifically looks for files ending in `.js` and runs analysis on them.

```
$ node fwip.js -a test.js
$ node fwip.js -a test_files\
```

# Analyzing Remote Files

`fwip` can scrape a target site for all `html` and `js` files. It will extract javascript from html and save everything to `./scraped` as a hash name of the target site. Once you've scraped the target, you can run analysis on it. `fwip` will not rescrape a target if its hash already exists in `./scraped`. To re-scrape, just delete the directory and scrape again.

```
$ node fwip.js -a http://www.domxss.com/domxss/01_Basics/01_simplest_1.html
Scraping URL 'http://www.domxss.com/domxss/01_Basics/01_simplest_1.html'...
Target URL scraped and saved to scraped\d9bb9aff25454d5c425071173369fcce
To analyze, run: node fwip.js -a scraped\d9bb9aff25454d5c425071173369fcce

$ node fwip.js -a scraped\d9bb9aff25454d5c425071173369fcce
Ignoring file scraped/d9bb9aff25454d5c425071173369fcce/js/bootstrap.js
Ignoring file scraped/d9bb9aff25454d5c425071173369fcce/js/bootstrap.min.js
Ignoring file scraped/d9bb9aff25454d5c425071173369fcce/js/jquery.min.js
Analyzing file scraped/d9bb9aff25454d5c425071173369fcce/js/b.js
>> Potential vulnerability on line: 4
     document.write(m);
     Description: This issue contains 8 source(s), 1 sink(s), and 0 sanitizer(s).
     Sources:     document.URL
     Sinks:       document.write
Analyzing file scraped/d9bb9aff25454d5c425071173369fcce/js/cookieconsent.min.js
Analyzing file scraped/d9bb9aff25454d5c425071173369fcce/js/custom.js
Analyzing file scraped/d9bb9aff25454d5c425071173369fcce/js/embed.js
Analyzing file scraped/d9bb9aff25454d5c425071173369fcce/index_1.html
Analyzing file scraped/d9bb9aff25454d5c425071173369fcce/index.html

Finished analyzing 6 file(s) with 0 error(s) and 3 skipped file(s).
The following files were skipped:
  - bootstrap.js
  - bootstrap.min.js
  - jquery.min.js
```

# Working with ANTLR4 (optional)

Please note that fwip already contains ANTLR4-generated lexer and parser classes.  You do not need to use ANTLR4 to use fwip.  However, you might want to make modifications to the ANTLR4 JavaScript grammar and rebuild the lexer and parser.  In that case, you will need to understand how to use ANTLR4.  In this section we'll take a look at how to get ANTLR4 up and running on Linux/MacOS. See `Helpful ANTLR4 Resources` below for a link to a great guide on setting ANTLR4 up on Windows.

## Installing, Configuring and Running ANTLR4 on Linux/MacOS

The following steps illustrate how to install and configure ANTLR4 for Linux. You can also use ANTLR4 on MacOS and Windows.

1. Install the Java Runtime Environment (JRE)
2. Download ANTLR4 “Tool and Java runtime Lib” to /usr/local/lib
3. cd /usr/local/lib
4. sudo wget http://www.antlr.org/download/antlr-4.7.1-complete.jar
5. export CLASSPATH=".:/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH"
6. Add the following ANTLR aliases to your your ~/.bash_profile:
   alias antlr4='java -Xmx500M -cp \"/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH\" org.antlr.v4.Tool'
   alias grun='java org.antlr.v4.gui.TestRig'
7. source ~/.bash_profile

Make sure `antlr4` and `grun` are working commands now:

```
C:\> antlr4
ANTLR Parser Generator  Version 4.5.3
 -o ___              specify output directory where all output is generated
 -lib ___            specify location of grammars, tokens files
 -atn                generate rule augmented transition network diagrams
 -encoding ___       specify grammar file encoding; e.g., euc-jp
 -message-format ___ specify output style for messages in antlr, gnu, vs2005
 -long-messages      show exception details when available for errors and warnings
 -listener           generate parse tree listener (default)
 -no-listener        don't generate parse tree listener
 -visitor            generate parse tree visitor
 -no-visitor         don't generate parse tree visitor (default)
 -package ___        specify a package/namespace for the generated code
 -depend             generate file dependencies
 -D<option>=value    set/override a grammar-level option
 -Werror             treat warnings as errors
 -XdbgST             launch StringTemplate visualizer on generated code
 -XdbgSTWait         wait for STViz to close before continuing
 -Xforce-atn         use the ATN simulator for all predictions
 -Xlog               dump lots of logging info to antlr-timestamp.log

C:\> antlr4 -visitor <Grammar-file>
C:\> antlr4 -visitor -Dlanguage=JavaScript grammar_file.g4
```

```
C:\> grun
Warning: TestRig moved to org.antlr.v4.gui.TestRig; calling automatically
java org.antlr.v4.gui.TestRig GrammarName startRuleName
  [-tokens] [-tree] [-gui] [-ps file.ps] [-encoding encodingname]
  [-trace] [-diagnostics] [-SLL]
  [input-filename(s)]
Use startRuleName='tokens' if GrammarName is a lexer grammar.
Omitting input-filename makes rig read from stdin.

C:\> grun <grammar-name> <rule-to-test> <input-filename(s)>
```

## Helpful ANTLR4 Resources
* https://www.antlr.org/
* https://tomassetti.me/antlr-mega-tutorial/
* https://levlaz.org/setting-up-antlr4-on-windows/
* https://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference
