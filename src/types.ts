export type Direction = "N" | "E" | "S" | "W";
export type Action = "M" | "R" | "L";
export type Position = {
  x: number;
  y: number;
  direction: Direction;
};

// Map: x, y, status
// status:
// -1 point is inaccessible (physical obstacle like a hole)
//  0 accessibility is unknown
//  1 path is free
export type Map = Array<Array<-1 | 0 | 1>>;

export type ErrorLogMessage = {
  code: string;
  level: "WARNING" | "INFO" | "ERROR";
  timestamp: number;
  author: string;
  message: string;
};

export function getPreviousDirection(direction: Direction): Direction {
  const directions: Direction[] = ["N", "E", "S", "W"];
  const currentIndex = directions.indexOf(direction);
  const previousIndex =
    (currentIndex + directions.length - 1) % directions.length;
  return directions[previousIndex];
}

export function getNextDirection(direction: Direction): Direction {
  const directions: Direction[] = ["N", "E", "S", "W"];
  const currentIndex = directions.indexOf(direction);
  const nextIndex = (currentIndex + 1) % directions.length;
  return directions[nextIndex];
}

export function isAction(input: string): input is "L" | "R" | "M" {
  return ["L", "R", "M"].includes(input);
}

export function convertStringToActions(str: string): Action[] {
  const validActions = new Set(["M", "R", "L"]);
  const normalizedStr = str.toUpperCase();

  return Array.from(normalizedStr).map((char) => {
    if (validActions.has(char)) {
      return char as Action;
    } else {
      throw new Error(`Invalid action: ${char}`);
    }
  });
}
