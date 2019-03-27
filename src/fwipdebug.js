const { JavaScriptParserListener } = require("./antlr/JavaScriptParserListener");

// Hacks to acquire the calling function name and source line number for debug prints
Object.defineProperty(global, '__stack', {
get: function() {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack) {
            return stack;
        };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__function', {
get: function() {
        return __stack[1].getFunctionName();
    }
});
    
class FwIPListenerDebug extends JavaScriptParserListener {

    // Hook select callbacks from `JavaScriptParserListener`

    // enters
    enterProgram(ctx)                               { console.log("  %s: %s", __function, ctx.getText()); }
    enterSourceElement(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    enterStatement(ctx)                             { console.log("  %s: %s", __function, ctx.getText()); }
    enterBlock(ctx)                                 { console.log("  %s: %s", __function, ctx.getText()); }
    enterStatementList(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    enterVariableStatement(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterVariableDeclarationList(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    enterVariableDeclaration(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterVariableName(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterEmptyStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterExpressionStatement(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterIfStatement(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    enterDoStatement(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    enterWhileStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterForStatement(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterForVarStatement(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterForInStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterForVarInStatement(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterVarModifier(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    enterContinueStatement(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterBreakStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterReturnStatement(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterWithStatement(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    enterSwitchStatement(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterCaseBlock(ctx)                             { console.log("  %s: %s", __function, ctx.getText()); }
    enterCaseClauses(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    enterCaseClause(ctx)                            { console.log("  %s: %s", __function, ctx.getText()); }
    enterDefaultClause(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    enterLabelledStatement(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterThrowStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterTryStatement(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterCatchProduction(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterFinallyProduction(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterDebuggerStatement(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterFunctionDeclaration(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterClassDeclaration(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    enterClassTail(ctx)                             { console.log("  %s: %s", __function, ctx.getText()); }
    enterClassElement(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterMethodDefinition(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    enterGeneratorMethod(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterFormalParameterList(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterFormalParameterArg(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    enterLastFormalParameterArg(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    enterFunctionBody(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterSourceElements(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterArrayLiteral(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterElementList(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    enterLastElement(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    enterObjectLiteral(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    enterPropertyExpressionAssignment(ctx)          { console.log("  %s: %s", __function, ctx.getText()); }
    enterComputedPropertyExpressionAssignment(ctx)  { console.log("  %s: %s", __function, ctx.getText()); }
    enterPropertyGetter(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterPropertySetter(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterMethodProperty(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterPropertyShorthand(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterPropertyName(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterArguments(ctx)                             { console.log("  %s: %s", __function, ctx.getText()); }
    enterLastArgument(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterExpressionSequence(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    enterTemplateStringExpression(ctx)              { console.log("  %s: %s", __function, ctx.getText()); }
    enterTernaryExpression(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterLogicalAndExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    enterPreIncrementExpression(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    enterObjectLiteralExpression(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    enterInExpression(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterLogicalOrExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterNotExpression(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    enterPreDecreaseExpression(ctx)                 { console.log("  %s: %s", __function, ctx.getText()); }
    enterArgumentsExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterThisExpression(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterFunctionExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    enterUnaryMinusExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    enterAssignmentExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    enterPostDecreaseExpression(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    enterTypeofExpression(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    enterInstanceofExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    enterUnaryPlusExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterDeleteExpression(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    enterArrowFunctionExpression(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    enterEqualityExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    enterBitXOrExpression(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    enterSuperExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterMultiplicativeExpression(ctx)              { console.log("  %s: %s", __function, ctx.getText()); }
    enterBitShiftExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    enterParenthesizedExpression(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    enterAdditiveExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    enterRelationalExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    enterPostIncrementExpression(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    enterBitNotExpression(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    enterNewExpression(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    enterLiteralExpression(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterArrayLiteralExpression(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    enterMemberDotExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    enterClassExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterMemberIndexExpression(ctx)                 { console.log("  %s: %s", __function, ctx.getText()); }
    enterIdentifierExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    enterBitAndExpression(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    enterBitOrExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    enterAssignmentOperatorExpression(ctx)          { console.log("  %s: %s", __function, ctx.getText()); }
    enterVoidExpression(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterArrowFunctionParameters(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    enterArrowFunctionBody(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    enterAssignmentOperator(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    enterLiteral(ctx)                               { console.log("  %s: %s", __function, ctx.getText()); }
    enterNumericLiteral(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterIdentifierName(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    enterReservedWord(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    enterKeyword(ctx)                               { console.log("  %s: %s", __function, ctx.getText()); }
    enterGetter(ctx)                                { console.log("  %s: %s", __function, ctx.getText()); }
    enterSetter(ctx)                                { console.log("  %s: %s", __function, ctx.getText()); }
    enterEos(ctx)                                   { console.log("  %s: %s", __function, ctx.getText()); }

    // exits
    exitProgram(ctx)                                { console.log("  %s: %s", __function, ctx.getText()); }
    exitSourceElement(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    exitStatement(ctx)                              { console.log("  %s: %s", __function, ctx.getText()); }
    exitBlock(ctx)                                  { console.log("  %s: %s", __function, ctx.getText()); }
    exitStatementList(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    exitVariableStatement(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitVariableDeclarationList(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    exitVariableDeclaration(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitVariableName(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitEmptyStatement(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitExpressionStatement(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitIfStatement(ctx)                            { console.log("  %s: %s", __function, ctx.getText()); }
    exitDoStatement(ctx)                            { console.log("  %s: %s", __function, ctx.getText()); }
    exitWhileStatement(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitForStatement(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitForVarStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitForInStatement(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitForVarInStatement(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitVarModifier(ctx)                            { console.log("  %s: %s", __function, ctx.getText()); }
    exitContinueStatement(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitBreakStatement(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitReturnStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitWithStatement(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    exitSwitchStatement(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitCaseBlock(ctx)                              { console.log("  %s: %s", __function, ctx.getText()); }
    exitCaseClauses(ctx)                            { console.log("  %s: %s", __function, ctx.getText()); }
    exitCaseClause(ctx)                             { console.log("  %s: %s", __function, ctx.getText()); }
    exitDefaultClause(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    exitLabelledStatement(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitThrowStatement(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitTryStatement(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitCatchProduction(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitFinallyProduction(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitDebuggerStatement(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitFunctionDeclaration(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitClassDeclaration(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    exitClassTail(ctx)                              { console.log("  %s: %s", __function, ctx.getText()); }
    exitClassElement(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitMethodDefinition(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    exitGeneratorMethod(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitFormalParameterList(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitFormalParameterArg(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    exitLastFormalParameterArg(ctx)                 { console.log("  %s: %s", __function, ctx.getText()); }
    exitFunctionBody(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitSourceElements(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitArrayLiteral(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitElementList(ctx)                            { console.log("  %s: %s", __function, ctx.getText()); }
    exitLastElement(ctx)                            { console.log("  %s: %s", __function, ctx.getText()); }
    exitObjectLiteral(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    exitPropertyExpressionAssignment(ctx)           { console.log("  %s: %s", __function, ctx.getText()); }
    exitComputedPropertyExpressionAssignment(ctx)   { console.log("  %s: %s", __function, ctx.getText()); }
    exitPropertyGetter(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitPropertySetter(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitMethodProperty(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitPropertyShorthand(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitPropertyName(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitArguments(ctx)                              { console.log("  %s: %s", __function, ctx.getText()); }
    exitLastArgument(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitExpressionSequence(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    exitTemplateStringExpression(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    exitTernaryExpression(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitLogicalAndExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    exitPreIncrementExpression(ctx)                 { console.log("  %s: %s", __function, ctx.getText()); }
    exitObjectLiteralExpression(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    exitInExpression(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitLogicalOrExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitNotExpression(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    exitPreDecreaseExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    exitArgumentsExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitThisExpression(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitFunctionExpression(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    exitUnaryMinusExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    exitAssignmentExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    exitPostDecreaseExpression(ctx)                 { console.log("  %s: %s", __function, ctx.getText()); }
    exitTypeofExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    exitInstanceofExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    exitUnaryPlusExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitDeleteExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    exitArrowFunctionExpression(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    exitEqualityExpression(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    exitBitXOrExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    exitSuperExpression(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitMultiplicativeExpression(ctx)               { console.log("  %s: %s", __function, ctx.getText()); }
    exitBitShiftExpression(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    exitParenthesizedExpression(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    exitAdditiveExpression(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    exitRelationalExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    exitPostIncrementExpression(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    exitBitNotExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    exitNewExpression(ctx)                          { console.log("  %s: %s", __function, ctx.getText()); }
    exitLiteralExpression(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitArrayLiteralExpression(ctx)                 { console.log("  %s: %s", __function, ctx.getText()); }
    exitMemberDotExpression(ctx)                    { console.log("  %s: %s", __function, ctx.getText()); }
    exitClassExpression(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitMemberIndexExpression(ctx)                  { console.log("  %s: %s", __function, ctx.getText()); }
    exitIdentifierExpression(ctx)                   { console.log("  %s: %s", __function, ctx.getText()); }
    exitBitAndExpression(ctx)                       { console.log("  %s: %s", __function, ctx.getText()); }
    exitBitOrExpression(ctx)                        { console.log("  %s: %s", __function, ctx.getText()); }
    exitAssignmentOperatorExpression(ctx)           { console.log("  %s: %s", __function, ctx.getText()); }
    exitVoidExpression(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitArrowFunctionParameters(ctx)                { console.log("  %s: %s", __function, ctx.getText()); }
    exitArrowFunctionBody(ctx)                      { console.log("  %s: %s", __function, ctx.getText()); }
    exitAssignmentOperator(ctx)                     { console.log("  %s: %s", __function, ctx.getText()); }
    exitLiteral(ctx)                                { console.log("  %s: %s", __function, ctx.getText()); }
    exitNumericLiteral(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitIdentifierName(ctx)                         { console.log("  %s: %s", __function, ctx.getText()); }
    exitReservedWord(ctx)                           { console.log("  %s: %s", __function, ctx.getText()); }
    exitKeyword(ctx)                                { console.log("  %s: %s", __function, ctx.getText()); }
    exitGetter(ctx)                                 { console.log("  %s: %s", __function, ctx.getText()); }
    exitSetter(ctx)                                 { console.log("  %s: %s", __function, ctx.getText()); }
    exitEos(ctx)                                    { console.log("  %s: %s", __function, ctx.getText()); }
}

exports.FwIPListenerDebug = FwIPListenerDebug;
