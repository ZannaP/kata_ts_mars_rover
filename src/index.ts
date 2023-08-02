import { Map, Direction, Position } from "./types";
import { moveRover } from "./rover";
import { plateauInit } from "./plateau";

export function processRoverMove() {
  const inputPlateauRightX = 4;
  const inputPlateauTopY = 2;
  const startPosition = [0, 0, "N"];
  const route = "MMSSM";

  const currentMap = plateauInit(inputPlateauRightX, inputPlateauTopY);
}
processRoverMove();
