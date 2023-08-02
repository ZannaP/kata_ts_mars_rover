export type Direction = "N" | "E " | "S" | "W";
export type Coordinates = [number, number];
export type Position = {
  point: Coordinates;
  direction: Direction;
};
// Map: x, y, status
// status:
// -1 if point is inaccessible (physical obstacle like a hole)
//  0 if accessibility is unknown
//  1 path is free
export type Map = [Array<-1 | 0 | 1>];
