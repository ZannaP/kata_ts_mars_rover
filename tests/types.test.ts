import { Map, Position, Action, isAction, isActionType } from "../src/types";

describe("tests for isActionType function", () => {
  test("return TRUE for 'M'", () => {
    expect(isActionType("M")).toBe(true);
  });
  test("return TRUE for 'R'", () => {
    expect(isActionType("R")).toBe(true);
  });
  test("return TRUE for 'L'", () => {
    expect(isActionType("L")).toBe(true);
  });
  test("return FALSE for 'N'", () => {
    expect(isActionType("N")).toBe(false);
  });
});

describe("tests for isAction function", () => {
  test("return TRUE for 'MMMLR'", () => {
    expect(isAction("MMMLR")).toBe(true);
  });
  test("return FALSE for 'NMM'", () => {
    expect(isAction("NMM")).toBe(false);
  });
});
