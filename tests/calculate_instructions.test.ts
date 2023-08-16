import { Position } from "../src/types";
import { calculateInstruction } from "../src/calculate_instructions";

describe("test calculateInstruction function", () => {
  test("move 1 step to the North", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "N" };
    const endPoint: Position = { x: 0, y: 1, direction: "N" };
    expect(calculateInstruction(startPoint, "M")).toEqual(endPoint);
  });
  test("move 1 step to the South", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "S" };
    const endPoint: Position = { x: 0, y: -1, direction: "S" };
    expect(calculateInstruction(startPoint, "M")).toEqual(endPoint);
  });
  test("move 1 step to the East", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "E" };
    const endPoint: Position = { x: 1, y: 0, direction: "E" };
    expect(calculateInstruction(startPoint, "M")).toEqual(endPoint);
  });
  test("move 1 step to the West", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "W" };
    const endPoint: Position = { x: -1, y: 0, direction: "W" };
    expect(calculateInstruction(startPoint, "M")).toEqual(endPoint);
  });
  test("rotates from North to East if R", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "N" };
    const endPoint: Position = { x: 0, y: 0, direction: "E" };
    expect(calculateInstruction(startPoint, "R")).toEqual(endPoint);
  });

  test("rotates from North to West if L", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "N" };
    const endPoint: Position = { x: 0, y: 0, direction: "W" };
    expect(calculateInstruction(startPoint, "L")).toEqual(endPoint);
  });
  test("rotates from East to South if R", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "E" };
    const endPoint: Position = { x: 0, y: 0, direction: "S" };
    expect(calculateInstruction(startPoint, "R")).toEqual(endPoint);
  });
  test("rotates from East to North if L", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "E" };
    const endPoint: Position = { x: 0, y: 0, direction: "N" };
    expect(calculateInstruction(startPoint, "L")).toEqual(endPoint);
  });
  test("rotates from West to North if R", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "W" };
    const endPoint: Position = { x: 0, y: 0, direction: "N" };
    expect(calculateInstruction(startPoint, "R")).toEqual(endPoint);
  });
  test("rotates from West to South if L", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "W" };
    const endPoint: Position = { x: 0, y: 0, direction: "S" };
    expect(calculateInstruction(startPoint, "L")).toEqual(endPoint);
  });
  test("rotates from South to West if R", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "S" };
    const endPoint: Position = { x: 0, y: 0, direction: "W" };
    expect(calculateInstruction(startPoint, "R")).toEqual(endPoint);
  });
  test("rotates from South to East if L", () => {
    const startPoint: Position = { x: 0, y: 0, direction: "S" };
    const endPoint: Position = { x: 0, y: 0, direction: "E" };
    expect(calculateInstruction(startPoint, "L")).toEqual(endPoint);
  });
});
