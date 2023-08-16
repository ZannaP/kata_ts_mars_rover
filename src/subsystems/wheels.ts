export const checkWheels = async () => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, 4000);
  });
};
