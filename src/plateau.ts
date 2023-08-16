import { Map } from "./types";

export function plateauInit(top: number, right: number): Map {
  // validate input
  if (top < 0 && right < 0) {
    throw new Error(
      "The negative input for 'top' and 'right' parameters in plateauInit function"
    );
  }
  if (top < 0) {
    throw new Error(
      "The negative input for 'top' parameter in plateauInit function"
    );
  }
  if (right < 0) {
    throw new Error(
      "The negative input for 'right' parameter in plateauInit function"
    );
  }
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
