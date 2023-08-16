export async function checkArms() {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, 1000);
  });
}
