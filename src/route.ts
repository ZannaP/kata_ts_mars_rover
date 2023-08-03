import { Map, Position, Action } from "./types";
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
  if (validateRoute(route) === false) return false;

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
export function validateRoute(route: string): Action[] | boolean {
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

  return convertStringToActions(route);
}

export function validatePosition(
  x: number,
  y: number,
  direction: string
): Position {
  return;
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
  // add code here

  return true;
}

function isAction(input: string): input is "L" | "R" | "M" {
  return ["L", "R", "M"].includes(input);
}

function convertStringToActions(str: string): Action[] {
  const actionArray: Action[] = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toUpperCase() as Action; // Convert the character to uppercase and cast to Action type
    if (char === "M" || char === "R" || char === "L") {
      actionArray.push(char);
    } else {
      throw new Error(`Invalid action: ${char}`);
    }
  }

  return actionArray;
}
