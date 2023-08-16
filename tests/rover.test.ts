import { moveRover } from "../src/rover";
import { Map, Position, Action } from "../src/types";

describe("tests for moveRover function", () => {
  test("correct end point", async () => {
    const myMap: Map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const myPosition: Position = { x: 0, y: 0, direction: "N" };
    const myRoute: Action[] = ["M", "M", "R", "M"];
    const endPoint: Position = { x: 1, y: 2, direction: "E" };
    const action = await moveRover(myPosition, myRoute, myMap);
    expect(action).toEqual(endPoint);
  });
});
