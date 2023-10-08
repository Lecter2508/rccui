import { expect, test } from "vitest";
import { rccCalc } from "./rccCalculator";
import { contaminentGravel, contaminentPaved } from "./contaminent";

test("Testing exceptions", () => {
  expect(rccCalc(undefined, undefined)).toBe(null);
  expect(rccCalc(undefined, contaminentGravel[0], 0, 26)).toBeTypeOf("object");
  expect(rccCalc(contaminentGravel[1], contaminentPaved[6], 80)).toBeTypeOf("object");
});
