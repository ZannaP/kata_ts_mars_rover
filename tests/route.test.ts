import { Map } from "../src/types";
import { checkRoute, checkPointOnMap, checkRouteOnMap } from "../src/route";

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

describe("test checkRouteOnMap function", () => {
  test("it returns false if map is empty", () => {
    const myMap: Map = [[]];
    const myRoute = "MMSG";
    const expected = false;
    expect(checkRouteOnMap(myRoute, myMap)).toBe(expected);
  });
});
