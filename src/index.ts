import { Map, Direction, Position } from "./types";
import { moveRover } from "./rover";
import { plateauInit } from "./plateau";
import { validateRoute, validatePosition } from "./route";

export function processRoverMove() {
  // input
  const inputPlateauRightX = 4;
  const inputPlateauTopY = 2;
  const startX = 0;
  const startY = 0;
  const startDirection = "N";
  const route = "MMSSM";

  const currentMap = plateauInit(inputPlateauRightX, inputPlateauTopY);
  validatePosition(startX, startY, startDirection);
  validateRoute(route);
}
processRoverMove();
