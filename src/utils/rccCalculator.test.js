import { expect, test } from "vitest";
import { rccCalc } from "./rccCalculator";
import { contaminentGravel, contaminentPaved } from "./contaminent";

test("Testing exceptions", () => {
  expect(rccCalc(undefined, undefined)).toBe(null);
  expect(rccCalc(undefined, contaminentGravel[0])).toBe(null);
  expect(rccCalc(contaminentGravel[1], contaminentPaved[6], 80, 100).code).toBe("Coverage is above 100%");
});

test("Testing calculations", () => {
  expect(rccCalc(contaminentGravel[1], contaminentGravel[6], 40, 40).code).toBe(0);
  expect(rccCalc(contaminentGravel[1], contaminentGravel[6], 20, 20).code).toBe(3);
});
