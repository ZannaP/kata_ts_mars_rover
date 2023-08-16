import { Map, Direction, Position } from "./types";
import { moveRover } from "./rover";
import { plateauInit } from "./plateau";
import { validatedRoute, validatedPosition } from "./route";

export function processRoverMove(
  inputPlateauRightX: number,
  inputPlateauTopY: number,
  startX: number,
  startY: number,
  startDirection: Direction,
  route: string
) {
  const endPosition = moveRover(
    validatedPosition(startX, startY, startDirection),
    validatedRoute(route),
    plateauInit(inputPlateauRightX, inputPlateauTopY)
  );

  return endPosition;
}

processRoverMove(4, 2, 0, 0, "N", "MMSSM");
