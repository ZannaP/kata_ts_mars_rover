import { Map, Position } from "./types";
import { calculateInstruction } from "./calculate_instructions";
const currentDate = new Date();

export function checkRouteOnMap(
  x: number,
  y: number,
  direction: string,
  route: string,
  map: Map
): Position | boolean {
  // Map is checked in plateauInit()
  // Check Route string symbols
  if (checkRoute(route) === false) return false;

  let currentPosition: Position = { x: x, y: y, direction: direction };
  console.log(currentPosition);
  // Calculate commands
  route?.split("").forEach((command) => {
    currentPosition = calculateInstruction(currentPosition, command);
  });
  console.log(currentPosition);
  return currentPosition;
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
  //string with invalid characters
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
