import { Map, Position } from "../src/types";
import {
  checkRoute,
  checkPointOnMap,
  checkRouteOnMap,
  calculateInstruction,
} from "../src/route";

describe("test checkRoute function", () => {
  test("it returns false route is empty", () => {
    const myRoute = "";
    const expected = false;
    expect(checkRoute(myRoute)).toEqual(expected);
  });
  test("if route contains symbols not from <MRLNWES> returns false", () => {
    const myRoute = "W#3E";
    const expected = false;
    expect(checkRoute(myRoute)).toEqual(expected);
  });
});

describe("test checkPointOnMap function", () => {
  // we have matrix 5 x 3 filled with 1 when top right point is (4,2)
  test("it returns false if the point position is not on the map in the PLUS part", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(checkPointOnMap(7, 10, myMap)).toBe(false);
  });
  test("it returns false if the point position is not on the map in the MINUS part", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(checkPointOnMap(-7, -1, myMap)).toBe(false);
  });
  test("it returns true if the point position is in the left bottom corner of the map", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(checkPointOnMap(0, 0, myMap)).toBe(true);
  });
  test("it returns true if the point position is in the top right corner of the map", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(checkPointOnMap(4, 2, myMap)).toBe(true);
  });
  test("it returns false if the point position is in the (top+1, right) corner of the map", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(checkPointOnMap(4, 3, myMap)).toBe(false);
  });
  test("it returns false if the point position is in the (top, right+1) corner of the map", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(checkPointOnMap(5, 2, myMap)).toBe(false);
  });
});

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
});

describe("test checkRouteOnMap function", () => {
  test("it returns false if map is empty", () => {
    const myMap: Map = [[]];
    const myRoute = "MMSG";
    const expected = false;
    expect(checkRouteOnMap(0, 0, myRoute, myMap)).toBe(expected);
  });
});
