import { checkArms } from "./arms";
import { checkBattery } from "./battery";
import { checkCameras } from "./cameras";
import { checkWheels } from "./wheels";
export const checkSystems = async () => {
  const result =
    (await checkArms()) &&
    (await checkBattery()) &&
    (await checkCameras()) &&
    (await checkWheels());
  if (result === false)
    throw new Error("Systems Check Error from checkSystems");
  return result;
};
