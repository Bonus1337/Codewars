export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let num: number = 0;
  arrayOfSheep.forEach((sheep) => {
    if (sheep === true) {
      num += 1;
    }
  });
  return num;
}
