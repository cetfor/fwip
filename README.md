# Fun with Improvisational Parsers (FwIP)

FwIP is a proof-of-concept application that aims to illustrate how to parse formal computer languages. Specifically, it targets JavaScript, but the concepts used in this project can be applied to any programming language.

# Installing and Using FwIP

FwIP is written in `Node.js`, which requires you to have `Node.js` installed on your system. `Node.js` comes with `NPM` a package manager that will fetch all required dependencies for you. Once you have Node installed, clone this repo, run `npm install` in the root directory and run the cli `node p4.js`.

```
$ git clone <github.com\cetfor\fwip>
$ cd fwip
$ npm install
$ node p4.js -h
```

# Analyzing Files

P4 can analyze a single file or a batch of files. It specifically looks for files ending in `.js` and runs analysis on them.

```
$ node p4.js -a test.js
$ node p4.js -a test_files\
$ node p4.js -a http:\\localhost\my\cool\site.html
```

# Working with ANLTR4 (optional)

Please note that P4 already contains ANTLR4-generated lexer and parser classes.  You do not need to use ANTLR4 to use P4.  However, you might want to make modifications to the ANTLR4 JavaScript grammar and rebuild the lexer and parser.  In that case, you will need to understand how to use ANTLR4.  In this section we'll take a look at how to get ANTLR4 up and running on Windows, Linux, and OSX and basic usage on each platform.

## Installing, Configuring and Running ANTLR4 on Linux

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
