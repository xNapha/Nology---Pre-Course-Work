import { findScore } from "./darts";

describe("Darts", () => {
  test("Missed the target", () => {
    expect(findScore(-9, 9)).toEqual(0);
  });
  test("Outer Circle", ()=>{
    expect(findScore(0,10)).toEqual(1);
  });
  test("Inner Cicle", () => {
    expect(findScore(0,5)).toEqual(5)
  });
  test("Center", () => {
    expect(findScore(0,0)).toEqual(10)
  });
  test("Invalid Input", () => {
    expect(findScore("a",0)).toEqual(null)
  });
  test("Invalid Input", () => {
    expect(findScore(0,"a")).toEqual(null)
  });
  test("Invalid Input", () => {
    expect(findScore("a",)).toEqual(null)
  });
});