import { Map, Direction, Position } from "./types";
import { moveRover } from "./rover";
import { plateauInit } from "./plateau";
import { validatedRoute, validatedPosition } from "./route";

export function processRoverMove() {
  // input
  const inputPlateauRightX = 4;
  const inputPlateauTopY = 2;
  const startX = 0;
  const startY = 0;
  const startDirection = "N";
  const route = "MMSSM";

  const endPosition = moveRover(
    validatedPosition(startX, startY, startDirection),
    validatedRoute(route),
    plateauInit(inputPlateauRightX, inputPlateauTopY)
  );

  return endPosition;
}

processRoverMove();
