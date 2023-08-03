import { Map, Position, Action } from "../src/types";
import { validatedRoute, checkPointOnMap, checkRouteOnMap } from "../src/route";

describe("test validatedRoute function", () => {
  test("it throws an error if route string is empty", () => {
    expect(() => {
      validatedRoute("");
    }).toThrow("The route string is empty");
  });
  test("it throws an error if route contains symbols not from <MRL>", () => {
    expect(() => {
      validatedRoute("W#3E");
    }).toThrow("The route string contains invalid characters");
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
  // Map was checked in previous steps
  // test("it returns false if map is empty", () => {
  //   const myMap: Map = [[]];
  //   const myPosition: Position = { x: 0, y: 0, direction: "E" };
  //   const myRoute: Action[] = ["M", "M", "R", "M"];
  //   expect(checkRouteOnMap(myPosition, myRoute, myMap)).toThrow(
  //     "The map is empty"
  //   );
  // });

  test("it returns false if map is empty", () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const myPosition: Position = { x: 0, y: 0, direction: "N" };
    const myRoute: Action[] = ["M", "M", "R", "M"];
    const endPoint: Position = { x: 1, y: 2, direction: "E" };
    expect(checkRouteOnMap(myPosition, myRoute, myMap)).toEqual(endPoint);
  });
});
