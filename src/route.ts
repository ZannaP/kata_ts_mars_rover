import { Map, Position, Action } from "./types";
import { calculateInstruction } from "./calculate_instructions";
const currentDate = new Date();

export function checkRouteOnMap(
  position: Position,
  route: Action[],
  map: Map
): Position {
  // Calculate commands
  route?.forEach((command) => {
    position = calculateInstruction(position, command);
  });
  console.log(position);
  return position;
}

// Is route a valid route from the symbols point of view???
export function validatedRoute(route: string): Action[] {
  // empty string
  if (route.length === 0) {
    console.log({
      code: "01",
      level: "ERROR",
      timestamp: currentDate.getTime(),
      author: `checkRoute('${route}')`,
      message: "The route string is empty",
    });
    throw new Error("The route string is empty");
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
    throw new Error("The route string contains invalid characters");
  }

  return convertStringToActions(route);
}

export function validatedPosition(
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
