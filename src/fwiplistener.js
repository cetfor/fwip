const { JavaScriptParserListener } = require("./antlr/JavaScriptParserListener");
const { evaluateState } = require("./fwipanalyzers");


let stack = new Array();
let state = new Object();
let currentVar = "";

class FwIPListener extends JavaScriptParserListener {
    
    // ==========================================
    // enters
    // ==========================================

    enterProgram(ctx) {
        state = new Object();
        state["_assignments"] = {};
        state["_variables"] = {};
    }

    enterVariableStatement(ctx) {
        stack = new Array();
    }

    enterAssignmentExpression(ctx) {
        stack = new Array();
    }

    enterLiteral(ctx) {
        stack.push(ctx.getText());
    }

    enterVariableName(ctx) {
        const varName = ctx.getText();
        currentVar = varName;
        if (!(state["_variables"].hasOwnProperty(currentVar))) {
            state["_variables"][currentVar] = [];
        }
    }

    enterIdentifierExpression(ctx) {
        stack.push(ctx.getText());
    }

    enterIdentifierName(ctx) {
        stack.push(ctx.getText());
    }


    // ==========================================
    // exits
    // ==========================================

    exitVariableDeclaration(ctx) {
        const stackClone = stack.slice(0);
        stackClone.forEach(item => {
            if (currentVar) {
                state["_variables"][currentVar].push(item);
            }
        })
        currentVar = "";
    }
    
    exitAssignmentExpression(ctx) {
        state["_assignments"][ctx.start.line] = {} 
        state["_assignments"][ctx.start.line]['stack'] = stack.slice(0);
        state["_assignments"][ctx.start.line]['source'] = ctx.getText();
    }

    // exitStatement(ctx) {
    //     state["_assignments"][ctx.start.line] = {} 
    //     state["_assignments"][ctx.start.line]['stack'] = stack.slice(0);
    //     state["_assignments"][ctx.start.line]['source'] = ctx.getText();
    // }

    exitProgram(ctx) {
        evaluateState(state);
    }

}

exports.FwIPListener = FwIPListener;
