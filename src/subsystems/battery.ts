export const checkBattery = async () => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, 500);
  });
};
