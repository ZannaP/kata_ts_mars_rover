import { Map, Position, Action } from "./types";
import { checkSystems } from "./subsystems/all_systems";
import { calculateInstruction } from "./calculate_instructions";

export async function moveRover(
  position: Position,
  route: Action[],
  map: Map
): Promise<Position> {
  // move on route
  for (const command of route) {
    // check subsystems
    let checkSystemsResult = await checkSystems();
    position = calculateInstruction(position, command);
    console.log("I am on ", position);
  }
  console.log("Finish on ", position);
  return position;
}
