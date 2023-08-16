export const checkCameras = async () => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, 2000);
  });
};
