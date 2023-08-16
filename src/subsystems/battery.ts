export const checkBattery = async () => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, 2500);
  });
};
