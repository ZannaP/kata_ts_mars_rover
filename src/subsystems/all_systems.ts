import { checkArms } from "./arms";
import { checkBattery } from "./battery";
import { checkCameras } from "./cameras";
import { checkWheels } from "./wheels";
export const checkSystems = async () => {
  return (
    (await checkArms()) &&
    (await checkBattery()) &&
    (await checkCameras()) &&
    (await checkWheels())
  );
};
