// Generated from .\JavaScriptParser.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JavaScriptParser.

function JavaScriptParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JavaScriptParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JavaScriptParserVisitor.prototype.constructor = JavaScriptParserVisitor;

// Visit a parse tree produced by JavaScriptParser#program.
JavaScriptParserVisitor.prototype.visitProgram = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#sourceElement.
JavaScriptParserVisitor.prototype.visitSourceElement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#statement.
JavaScriptParserVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#block.
JavaScriptParserVisitor.prototype.visitBlock = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#statementList.
JavaScriptParserVisitor.prototype.visitStatementList = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#variableStatement.
JavaScriptParserVisitor.prototype.visitVariableStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#variableDeclarationList.
JavaScriptParserVisitor.prototype.visitVariableDeclarationList = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#variableDeclaration.
JavaScriptParserVisitor.prototype.visitVariableDeclaration = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#variableName.
JavaScriptParserVisitor.prototype.visitVariableName = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#emptyStatement.
JavaScriptParserVisitor.prototype.visitEmptyStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#expressionStatement.
JavaScriptParserVisitor.prototype.visitExpressionStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ifStatement.
JavaScriptParserVisitor.prototype.visitIfStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#DoStatement.
JavaScriptParserVisitor.prototype.visitDoStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#WhileStatement.
JavaScriptParserVisitor.prototype.visitWhileStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ForStatement.
JavaScriptParserVisitor.prototype.visitForStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ForVarStatement.
JavaScriptParserVisitor.prototype.visitForVarStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ForInStatement.
JavaScriptParserVisitor.prototype.visitForInStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ForVarInStatement.
JavaScriptParserVisitor.prototype.visitForVarInStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#varModifier.
JavaScriptParserVisitor.prototype.visitVarModifier = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#continueStatement.
JavaScriptParserVisitor.prototype.visitContinueStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#breakStatement.
JavaScriptParserVisitor.prototype.visitBreakStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#returnStatement.
JavaScriptParserVisitor.prototype.visitReturnStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#withStatement.
JavaScriptParserVisitor.prototype.visitWithStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#switchStatement.
JavaScriptParserVisitor.prototype.visitSwitchStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#caseBlock.
JavaScriptParserVisitor.prototype.visitCaseBlock = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#caseClauses.
JavaScriptParserVisitor.prototype.visitCaseClauses = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#caseClause.
JavaScriptParserVisitor.prototype.visitCaseClause = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#defaultClause.
JavaScriptParserVisitor.prototype.visitDefaultClause = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#labelledStatement.
JavaScriptParserVisitor.prototype.visitLabelledStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#throwStatement.
JavaScriptParserVisitor.prototype.visitThrowStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#tryStatement.
JavaScriptParserVisitor.prototype.visitTryStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#catchProduction.
JavaScriptParserVisitor.prototype.visitCatchProduction = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#finallyProduction.
JavaScriptParserVisitor.prototype.visitFinallyProduction = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#debuggerStatement.
JavaScriptParserVisitor.prototype.visitDebuggerStatement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#functionDeclaration.
JavaScriptParserVisitor.prototype.visitFunctionDeclaration = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#classDeclaration.
JavaScriptParserVisitor.prototype.visitClassDeclaration = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#classTail.
JavaScriptParserVisitor.prototype.visitClassTail = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#classElement.
JavaScriptParserVisitor.prototype.visitClassElement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#methodDefinition.
JavaScriptParserVisitor.prototype.visitMethodDefinition = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#generatorMethod.
JavaScriptParserVisitor.prototype.visitGeneratorMethod = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#formalParameterList.
JavaScriptParserVisitor.prototype.visitFormalParameterList = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#formalParameterArg.
JavaScriptParserVisitor.prototype.visitFormalParameterArg = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#lastFormalParameterArg.
JavaScriptParserVisitor.prototype.visitLastFormalParameterArg = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#functionBody.
JavaScriptParserVisitor.prototype.visitFunctionBody = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#sourceElements.
JavaScriptParserVisitor.prototype.visitSourceElements = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#arrayLiteral.
JavaScriptParserVisitor.prototype.visitArrayLiteral = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#elementList.
JavaScriptParserVisitor.prototype.visitElementList = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#lastElement.
JavaScriptParserVisitor.prototype.visitLastElement = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#objectLiteral.
JavaScriptParserVisitor.prototype.visitObjectLiteral = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PropertyExpressionAssignment.
JavaScriptParserVisitor.prototype.visitPropertyExpressionAssignment = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ComputedPropertyExpressionAssignment.
JavaScriptParserVisitor.prototype.visitComputedPropertyExpressionAssignment = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PropertyGetter.
JavaScriptParserVisitor.prototype.visitPropertyGetter = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PropertySetter.
JavaScriptParserVisitor.prototype.visitPropertySetter = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#MethodProperty.
JavaScriptParserVisitor.prototype.visitMethodProperty = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PropertyShorthand.
JavaScriptParserVisitor.prototype.visitPropertyShorthand = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#propertyName.
JavaScriptParserVisitor.prototype.visitPropertyName = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#arguments.
JavaScriptParserVisitor.prototype.visitArguments = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#lastArgument.
JavaScriptParserVisitor.prototype.visitLastArgument = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#expressionSequence.
JavaScriptParserVisitor.prototype.visitExpressionSequence = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#TemplateStringExpression.
JavaScriptParserVisitor.prototype.visitTemplateStringExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#TernaryExpression.
JavaScriptParserVisitor.prototype.visitTernaryExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#LogicalAndExpression.
JavaScriptParserVisitor.prototype.visitLogicalAndExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PreIncrementExpression.
JavaScriptParserVisitor.prototype.visitPreIncrementExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ObjectLiteralExpression.
JavaScriptParserVisitor.prototype.visitObjectLiteralExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#InExpression.
JavaScriptParserVisitor.prototype.visitInExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#LogicalOrExpression.
JavaScriptParserVisitor.prototype.visitLogicalOrExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#NotExpression.
JavaScriptParserVisitor.prototype.visitNotExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PreDecreaseExpression.
JavaScriptParserVisitor.prototype.visitPreDecreaseExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ArgumentsExpression.
JavaScriptParserVisitor.prototype.visitArgumentsExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ThisExpression.
JavaScriptParserVisitor.prototype.visitThisExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#FunctionExpression.
JavaScriptParserVisitor.prototype.visitFunctionExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#UnaryMinusExpression.
JavaScriptParserVisitor.prototype.visitUnaryMinusExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#AssignmentExpression.
JavaScriptParserVisitor.prototype.visitAssignmentExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PostDecreaseExpression.
JavaScriptParserVisitor.prototype.visitPostDecreaseExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#TypeofExpression.
JavaScriptParserVisitor.prototype.visitTypeofExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#InstanceofExpression.
JavaScriptParserVisitor.prototype.visitInstanceofExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#UnaryPlusExpression.
JavaScriptParserVisitor.prototype.visitUnaryPlusExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#DeleteExpression.
JavaScriptParserVisitor.prototype.visitDeleteExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ArrowFunctionExpression.
JavaScriptParserVisitor.prototype.visitArrowFunctionExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#EqualityExpression.
JavaScriptParserVisitor.prototype.visitEqualityExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#BitXOrExpression.
JavaScriptParserVisitor.prototype.visitBitXOrExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#SuperExpression.
JavaScriptParserVisitor.prototype.visitSuperExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#MultiplicativeExpression.
JavaScriptParserVisitor.prototype.visitMultiplicativeExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#BitShiftExpression.
JavaScriptParserVisitor.prototype.visitBitShiftExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ParenthesizedExpression.
JavaScriptParserVisitor.prototype.visitParenthesizedExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#AdditiveExpression.
JavaScriptParserVisitor.prototype.visitAdditiveExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#RelationalExpression.
JavaScriptParserVisitor.prototype.visitRelationalExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#PostIncrementExpression.
JavaScriptParserVisitor.prototype.visitPostIncrementExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#BitNotExpression.
JavaScriptParserVisitor.prototype.visitBitNotExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#NewExpression.
JavaScriptParserVisitor.prototype.visitNewExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#LiteralExpression.
JavaScriptParserVisitor.prototype.visitLiteralExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ArrayLiteralExpression.
JavaScriptParserVisitor.prototype.visitArrayLiteralExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#MemberDotExpression.
JavaScriptParserVisitor.prototype.visitMemberDotExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#ClassExpression.
JavaScriptParserVisitor.prototype.visitClassExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#MemberIndexExpression.
JavaScriptParserVisitor.prototype.visitMemberIndexExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#IdentifierExpression.
JavaScriptParserVisitor.prototype.visitIdentifierExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#BitAndExpression.
JavaScriptParserVisitor.prototype.visitBitAndExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#BitOrExpression.
JavaScriptParserVisitor.prototype.visitBitOrExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#AssignmentOperatorExpression.
JavaScriptParserVisitor.prototype.visitAssignmentOperatorExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#VoidExpression.
JavaScriptParserVisitor.prototype.visitVoidExpression = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#arrowFunctionParameters.
JavaScriptParserVisitor.prototype.visitArrowFunctionParameters = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#arrowFunctionBody.
JavaScriptParserVisitor.prototype.visitArrowFunctionBody = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#assignmentOperator.
JavaScriptParserVisitor.prototype.visitAssignmentOperator = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#literal.
JavaScriptParserVisitor.prototype.visitLiteral = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#numericLiteral.
JavaScriptParserVisitor.prototype.visitNumericLiteral = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#identifierName.
JavaScriptParserVisitor.prototype.visitIdentifierName = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#reservedWord.
JavaScriptParserVisitor.prototype.visitReservedWord = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#keyword.
JavaScriptParserVisitor.prototype.visitKeyword = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#getter.
JavaScriptParserVisitor.prototype.visitGetter = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#setter.
JavaScriptParserVisitor.prototype.visitSetter = function(ctx) {
};


// Visit a parse tree produced by JavaScriptParser#eos.
JavaScriptParserVisitor.prototype.visitEos = function(ctx) {
};



exports.JavaScriptParserVisitor = JavaScriptParserVisitor;