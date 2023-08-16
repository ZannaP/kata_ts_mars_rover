import { plateauInit } from "../src/plateau";
describe("test plateauInit function", () => {
  // on the first stage all points are accessible by default - status 1
  it("should return [[1]] on (0, 0) input", () => {
    expect(plateauInit(0, 0)).toEqual([[1]]);
  });

  test("it return a matrix 2 x 2 filled with 1 when passed (1,1)", () => {
    const expected = [
      [1, 1],
      [1, 1],
    ];
    expect(plateauInit(1, 1)).toEqual(expected);
  });
  test("it return a matrix 5 x 3 filled with 1 when passed (4,2)", () => {
    const expected = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(plateauInit(4, 2)).toEqual(expected);
  });
  // check if top and right are positive
  test("it throws an error if top and right are negative", () => {
    expect(() => {
      plateauInit(-1, 0);
    }).toThrow(
      "The negative input for 'right' parameter in plateauInit function"
    );
    expect(() => {
      plateauInit(5, -10);
    }).toThrow(
      "The negative input for 'top' parameter in plateauInit function"
    );
    expect(() => {
      plateauInit(-5, -10);
    }).toThrow(
      "The negative input for 'top' and 'right' parameters in plateauInit function"
    );
  });
});
