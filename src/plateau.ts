import { Map } from "./types";

export function plateauInit(top: number, right: number): Map {
  let arr: Map = [[]];
  for (let i = 0; i <= right; i++) {
    let arrItem = [];
    for (let j = 0; j <= top; j++) {
      // the check status for this point function could be here
      // with output -1 | 0 | 1
      //      closed | unknown | opened
      arrItem[j] = 1;
    }
    arr[i] = arrItem;
  }
  return arr;
}
