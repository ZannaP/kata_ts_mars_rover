import { Map, ErrorLogMessage, Direction, Action } from "./types";
const currentDate = new Date();

export function checkRouteOnMap(route: string, map: Map) {
  // Map is checked in plateauInit()
  // Check Route string
  checkRoute(route);
}

export function checkRoute(route: string) {
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
  if (isInstruction(route) === false) {
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

function isInstruction(input: string): input is "L" | "R" | "M" {
  return ["L", "R", "M"].includes(input);
}

export function checkPointOnMap(x: number, y: number, map: Map) {
  let comment = "";
  if (x > map[0].length - 1)
    comment += ` Coordinate X = ${x} > ` + (map[0].length - 1) + ".";
  if (y > map.length - 1)
    comment += ` Coordinate Y = ${y} > ` + (map.length - 1) + ".";

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
  return true;
}
