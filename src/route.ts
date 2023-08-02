import { Map, Position, DIRECTIONS } from "./types";
const currentDate = new Date();

export function checkRouteOnMap(x: number, y: number, route: string, map: Map) {
  // Map is checked in plateauInit()
  // Check Route string symbols
  if (checkRoute(route) === false) return;

  let currentPosition: Position = { x: x, y: y, direction: route[0] };
  // Calculate commands
  route?.split("").forEach((command) => {
    currentPosition = calculateInstruction(currentPosition, command);
  });
  return false;
}

// Calculate Instruction
export function calculateInstruction(
  position: Position,
  command: string
): Position {
  switch (command) {
    case "M":
      switch (position.direction) {
        case "N":
          position.y++;
          break;
        case "E":
          position.x++;
          break;
        case "S":
          position.y--;
          break;
        case "W":
          position.x--;
          break;
      }
    case "R":
      position.direction =
        DIRECTIONS[
          getPreviousCircularIndex(
            DIRECTIONS.indexOf(position.direction),
            DIRECTIONS.length
          )
        ];
      break;
    case "L":
      position.direction =
        DIRECTIONS[
          getNextCircularIndex(
            DIRECTIONS.indexOf(position.direction),
            DIRECTIONS.length
          )
        ];
      break;
  }

  return position;
}

// Is route a valid route from the symbols point of view???
export function checkRoute(route: string): boolean {
  // empty string
  if (route.length === 0) {
    console.log({
      code: "01",
      level: "ERROR",
      timestamp: currentDate.getTime(),
      author: `checkRoute('${route}')`,
      message: "The route string is empty",
    });
    return false;
  }
  // string with invalid characters
  if (isAction(route) === false) {
    console.log({
      code: "02",
      level: "ERROR",
      timestamp: currentDate.getTime(),
      author: `checkRoute('${route}')`,
      message: "The route string contains invalid characters",
    });
    return false;
  }

  return true;
}

export function checkPointOnMap(x: number, y: number, map: Map) {
  // check if point is on map
  let comment = "";
  if (x > map[0].length - 1 || x < 0)
    comment += ` Coordinate X = ${x} ∉ [0 : ` + (map[0].length - 1) + "].";
  if (y > map.length - 1 || y < 0)
    comment += ` Coordinate Y = ${y} ∉ [0 : ` + (map.length - 1) + "].";

  if (comment.length) {
    console.log({
      code: "03",
      level: "ERROR",
      timestamp: currentDate.getTime(),
      author: `checkPointOnMap('${x}', '${y}', '${map}')`,
      message: "The point position is not on the map." + comment,
    });
    return false;
  }

  // check map status - if the point is available
  // add code

  return true;
}

function isAction(input: string): input is "L" | "R" | "M" {
  return ["L", "R", "M"].includes(input);
}

function getNextCircularIndex(
  currentIndex: number,
  arrayLength: number
): number {
  return (currentIndex + 1) % arrayLength;
}

function getPreviousCircularIndex(
  currentIndex: number,
  arrayLength: number
): number {
  return (currentIndex - 1 + arrayLength) % arrayLength;
}
