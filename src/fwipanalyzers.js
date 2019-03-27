const { fwipSources, fwipSinks, fwipSanitizers } = require("./fwipsss");

// ==========================================================================================================================
// == All OWASP Cheat Sheets ================================================================================================
// https://github.com/OWASP/CheatSheetSeries/tree/master/cheatsheets

// OWASP Third Party Javascript Management Cheat Sheet:
// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.md

// OWASP XSS Cheat Sheet:
// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md

// OWASP CSRF Cheat Sheet:
// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md

// OWASP DOM-based XSS Prevention Cheat Sheet:
// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.md
// http://www.domxss.com/domxss/domxss.php

// OWASP AJAX Security Cheat Sheet:
// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/AJAX_Security_Cheat_Sheet.md

// OWASP Clickjacking Defense Cheat Sheet
// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Clickjacking_Defense_Cheat_Sheet.md

// ==========================================================================================================================
// == OWASP Testing Guide ===================================================================================================
// https://www.owasp.org/index.php/OWASP_Testing_Guide_v4_Table_of_Contents

// Testing for JavaScript Execution (OTG-CLIENT-002)
// https://www.owasp.org/index.php/Testing_for_JavaScript_Execution_(OTG-CLIENT-002)

function analyzeSourcesAndSinks(state) {
  const assignments = state._assignments
  const variables = state._variables
  let sourceNum = 0;
  let sinkNum = 0;
  let sanitizerNum = 0;
  const sources = [];
  const sinks = [];
  const sanitizers = [];
  const srcPreviewLen = 100;

  for(const lineNumber in assignments) {
    assignments[lineNumber]['stack'].forEach(entry => {
      if (Object.keys(variables).includes(entry)) {
        variables[entry].forEach(item => {
          if (fwipSources.includes(item)) {
            sourceNum++;
            sources.push(item);
          }
          if (fwipSinks.includes(item)) {
            sinkNum++;
            sinks.push(item);
          }
        })
      }

      if (fwipSources.includes(entry)) {
        sourceNum++;
        sources.push(entry);
      }
      if (fwipSinks.includes(entry)) {
        sinkNum++;
        sinks.push(entry);
      }
      if (fwipSanitizers.includes(entry)) {
        sanitizerNum++;
        sanitizers.push(entry);
      }
    })

    // console.log(`sources:     ${sourceNum}`);
    // console.log(`sources:     ${sources}`);
    // console.log(`sinks:       ${sinkNum}`);
    // console.log(`sinks:       ${sinks}`);
    // console.log(`sanitizers:  ${sanitizerNum}`);
    // console.log(`sanitizers:  ${sanitizers}`);
    // console.log(variables)
    // console.log(assignments)

    if (sourceNum && sinkNum) {
      if (sanitizerNum < sourceNum) {
        const src = assignments[lineNumber]['source']
        console.log(`>> Potential vulnerability on line: ${lineNumber}`);
        if (src.length > srcPreviewLen) {
          console.log(`     Line ${lineNumber}: ${assignments[lineNumber]['source'].substr(0, srcPreviewLen)}...`);
        }
        else {
          console.log(`     ${assignments[lineNumber]['source']}`);
        }
        console.log(`     Description: This line contains ${sourceNum} source(s), ${sinkNum} sink(s), and ${sanitizerNum} sanitizer(s).`);
        console.log(`     Sources:     ${sources}`);
        console.log(`     Sinks:       ${sinks}`);
        if (sanitizers.length > 0) {
          console.log(`     Sanitizers:  ${sanitizers}`);
        }
      }
    }
  }
}

function evaluateState(state) {

  // Analyzer 1: Simple source and sink analysis
  analyzeSourcesAndSinks(state);

}

exports.evaluateState = evaluateState;