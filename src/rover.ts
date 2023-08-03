import { Map, Position, Action } from "./types";
import { checkRouteOnMap } from "./route";
export function moveRover(
  position: Position,
  route: Action[],
  map: Map
): Position {
  checkRouteOnMap(position, route, map);

  // check subsystems
  // await ...

  // move on route
  // route.foreach {
  //   if checkPointOnMap(position.x, position.y, map) {
  //        await check subsystems
  //        await position = calculateInstruction(position,command)
  //        create log
  //        }
  // }
  return;
}
