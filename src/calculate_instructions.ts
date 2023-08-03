import { Position, getPreviousDirection, getNextDirection } from "./types";

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
      position.direction = getPreviousDirection(position.direction);
      break;
    case "R":
      position.direction = getNextDirection(position.direction);
      break;
      break;
  }

  return position;
}
