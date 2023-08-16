export async function checkBattery() {
  return new Promise<boolean>(function (resolve, reject) {
    const randomInt = Math.floor(Math.random() * 10);
    setTimeout(() => resolve(randomInt % 2 === 0), 500);
  });
}
