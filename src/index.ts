import { Map, Direction, Position } from "./types";
import { moveRover } from "./rover";
import { plateauInit } from "./plateau";
import { validatedRoute, validatedPosition, checkRouteOnMap } from "./route";
import { checkSystems } from "./subsystems/all_systems";

export async function processRoverMove(
  inputPlateauRightX: number,
  inputPlateauTopY: number,
  startX: number,
  startY: number,
  startDirection: Direction,
  route: string
) {
  const startPosition = validatedPosition(startX, startY, startDirection);
  const map = plateauInit(inputPlateauRightX, inputPlateauTopY);
  const path = validatedRoute(route);
  const goal = checkRouteOnMap(startPosition, path, map);
  console.log("The route's goal is", goal);

  const checkSystemsResult = await checkSystems();

  const endPosition = moveRover(
    validatedPosition(startX, startY, startDirection),
    path,
    map
  );

  return endPosition;
}

processRoverMove(4, 5, 1, 0, "N", "MMRM");
