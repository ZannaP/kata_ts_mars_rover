import { Coordinates, Map, Direction, Position } from "./types";
import { moveRover } from "./rover";
import { plateauInit } from "./plateau";

function processRoverMove() {
  const inputPlateauSizeX = 5;
  const inputPlateauSizeY = 3;
  const startPosition = [[0, 0], "N"];
  const route = "MMSSM";

  const currentMap = plateauInit(inputPlateauSizeX, inputPlateauSizeY);
}
processRoverMove();
