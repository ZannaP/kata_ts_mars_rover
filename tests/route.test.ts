import { Map, Position } from "../src/types";
import { validateRoute, checkPointOnMap, checkRouteOnMap } from "../src/route";

describe("test checkRoute function", () => {
  test("it returns false route is empty", () => {
    const myRoute = "";
    const expected = false;
    expect(validateRoute(myRoute)).toEqual(expected);
  });
  test("if route contains symbols not from <MRLNWES> returns false", () => {
    const myRoute = "W#3E";
    const expected = false;
    expect(validateRoute(myRoute)).toEqual(expected);
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

describe("test checkRouteOnMap function", () => {
  test("it returns false if map is empty", () => {
    const myMap: Map = [[]];
    const myRoute = "MMSG";
    const expected = false;
    expect(checkRouteOnMap(0, 0, "E", myRoute, myMap)).toEqual(expected);
  });

  test("it returns false if map is empty", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const myRoute = "MMRM";
    const endPoint: Position = { x: 1, y: 2, direction: "E" };
    expect(checkRouteOnMap(0, 0, "N", myRoute, myMap)).toEqual(endPoint);
  });
});