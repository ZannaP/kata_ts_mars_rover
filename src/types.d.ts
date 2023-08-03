export type Direction = "N" | "E" | "S" | "W";
export type Action = "M" | "R" | "L";
export type Position = {
  x: number;
  y: number;
  direction: Direction[];
};

// Map: x, y, status
// status:
// -1 point is inaccessible (physical obstacle like a hole)
//  0 accessibility is unknown
//  1 path is free
export type Map = Array<Array<-1 | 0 | 1>>;

export type ErrorLogMessage = {
  code: string;
  level: "WARNING" | "INFO" | "ERROR";
  timestamp: number;
  author: string;
  message: string;
};
