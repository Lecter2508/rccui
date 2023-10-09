import { expect, test } from "vitest";
import { crosswind } from "./crosswind";

test("Testing crosswind calculations", () => {
  expect(crosswind({ direction: 90, speed: 20, gust: 0 },{direction:360})).toStrictEqual({crosswindComp:20, gustComp:0});
  expect(crosswind({ direction: 90, speed: 20, gust: 0 },{direction:0})).toStrictEqual({crosswindComp:20, gustComp:0});
  expect(crosswind({ direction: 90, speed: 20, gust: 0 },{direction:180})).toStrictEqual({crosswindComp:-20, gustComp:-0});
  expect(crosswind({ direction: 70, speed: 20, gust: 0 },{direction:0})).toStrictEqual({crosswindComp:19, gustComp:0});
});
