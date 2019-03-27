# ANTLR4 JavaScript Files

This directory contains files related to ANTLR4. Specifically, it contains the JavaScript grammar files (.g4) and the associated JavaScript (.js) files needed to implement the [semantic predicates](https://github.com/antlr/antlr4/blob/master/doc/predicates.md) contained in [the grammar we are using](https://github.com/antlr/grammars-v4/tree/master/javascript).

Semantic predicates allow developers to create more simplified grammar files, however they require handler code to be developed in the target language. In our case, this code has already been done. The handlers for the semantic predicates exits in `./JavaScript/JavaScriptBaseLexer.js` and `./JavaScript/JavaScriptBaseParser.js`.

# How to Use this Stuff

In general, you won't need to touch anything in this directory unless you've updated the grammar files. In that case you'll just need to regenerate the lexer and parser and, if applicable, update `./JavaScript/JavaScriptBaseLexer.js` and `./JavaScript/JavaScriptBaseParser.js` to handle any new or updated semantic predicates.

To generate the lexer and parse, just run these commands:

```
$ antlr4 -visitor -Dlanguage=JavaScript .\JavaScriptLexer.g4
$ antlr4 -visitor -Dlanguage=JavaScript .\JavaScriptParser.g4
```

Add this code on `line 4` of `antlr/JavaScriptLexer.js`:
```
var JavaScriptBaseLexer = require('./JavaScriptBaseLexer').JavaScriptBaseLexer;
```

Now you can copy the generated JavaScript files into the `p4\src\antlr` directory and start using your updated lexer and parser. The files you'll need are:

```
JavaScriptBaseLexer.js          // only if you modified this file
JavaScriptBaseParser.js         // only if you modified this file
JavaScriptLexer.js
JavaScriptParser.js
JavaScriptParserListener.js
JavaScriptParserVisitor.js
```
