import { Map, ErrorLogMessage, Direction, Action } from "./types";
export function checkRouteOnMap(route: string, map: Map) {
  checkRoute(route);
}

export function checkRoute(route: string) {
  const currentDate = new Date();
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

export function checkPointOnMap(x: number, y: number, map: Map) {}
