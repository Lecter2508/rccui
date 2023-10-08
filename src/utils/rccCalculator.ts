import { Contaminent } from "./contaminent";

export const rccCalc = (c1: Contaminent, c2: Contaminent, c1Coverage: number, c2Coverage: number) => {
  let result = { code: 6, maxCrosswind: 36, callDxp: false };
  //No contaminent
  if (c1 === undefined && c2 === undefined) {
    console.log("Please set at least one contaminent!");
    return null;
  }
  //Coverage above 100%
  if (c1Coverage + c2Coverage > 100) {
    console.log("Too much contamination!");
    return { code: "Coverage is above 100%", maxCrosswind: "Coverage is above 100%", callDxp: false };
  }
  //No coverage
  if (c1Coverage === undefined && c2Coverage === undefined) {
    console.log("Please set at least one coverage");
    return null;
  }
  //One contaminent
  if (c1 === undefined || c2 === undefined) {
    let contaminent: Contaminent;
    let coverage: number;
    if (c1 != undefined) {
      contaminent = c1;
      coverage = c1Coverage;
    } else {
      contaminent = c2;
      coverage = c2Coverage;
    }

    if (coverage <= 25) {
      result.code = 6;
      result.maxCrosswind = 36;
      result.callDxp = false;
    }
    if (coverage > 25) {
      result.code = contaminent.code;
      result.maxCrosswind = contaminent.maxCrosswind;
      result.callDxp = contaminent.callDxp;
    }

    console.log("Result for 1 contaminent: ", result);
    return result;
  }
  //Two contamient
  if (c1 != undefined && c2 != undefined) {
    //Case both above 25%
    if (c1Coverage && c2Coverage > 25) {
      result.code = Math.min(c1.code, c2.code);
      result.maxCrosswind = Math.min(c1.maxCrosswind, c2.maxCrosswind);
      result.callDxp = c1.callDxp || c2.callDxp;
    }
    //Case one above 25% and one below 25%
    if ((c1Coverage > 25 && c2Coverage <= 25) || (c2Coverage > 25 && c1Coverage <= 25)) {
      if (c1Coverage > 25 && c2Coverage <= 25) {
        result.code = c1.code;
        result.maxCrosswind = c1.maxCrosswind;
        result.callDxp = c1.callDxp;
      } else {
        result.code = c2.code;
        result.maxCrosswind = c2.maxCrosswind;
        result.callDxp = c2.callDxp;
      }
    }
    //Case both below 25%
    if (c1Coverage && c2Coverage <= 25) {
      if (c1Coverage === c2Coverage) {
        result.code = Math.min(c1.code, c2.code);
        result.maxCrosswind = Math.min(c1.maxCrosswind, c2.maxCrosswind);
        result.callDxp = c1.callDxp || c2.callDxp;
      } else {
        if (c1Coverage > c2Coverage) {
          result.code = c1.code;
          result.maxCrosswind = c1.maxCrosswind;
          result.callDxp = c1.callDxp;
        } else {
          result.code = c2.code;
          result.maxCrosswind = c2.maxCrosswind;
          result.callDxp = c2.callDxp;
        }
      }
      if (result.code >= 0 && result.code <= 2) {
        result.code = 3;
        result.maxCrosswind = 20;
        result.callDxp = true; //!Not sure, check with Mathieu
      }
    }
    console.log("Result for 2 contaminent: ", result);
    return result;
  }
};
