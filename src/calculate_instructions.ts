import { Position } from "./types";

export function calculateInstruction(
  position: Position,
  command: string
): Position {
  const directions = ["N", "E", "S", "W"];
  switch (command) {
    case "M":
      switch (position.direction) {
        case "N":
          position.y++;
          break;
        case "E":
          position.x++;
          break;
        case "S":
          position.y--;
          break;
        case "W":
          position.x--;
          break;
      }
      break;
    case "L":
      position.direction =
        directions[
          getPreviousCircularIndex(
            directions.indexOf(position.direction),
            directions.length
          )
        ];
      break;
    case "R":
      position.direction =
        directions[
          getNextCircularIndex(
            directions.indexOf(position.direction),
            directions.length
          )
        ];
      break;
  }

  return position;
}

function getNextCircularIndex(
  currentIndex: number,
  arrayLength: number
): number {
  return (currentIndex + 1) % arrayLength;
}

function getPreviousCircularIndex(
  currentIndex: number,
  arrayLength: number
): number {
  return (currentIndex - 1 + arrayLength) % arrayLength;
}
