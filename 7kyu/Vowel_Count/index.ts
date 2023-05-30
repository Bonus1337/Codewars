export class Kata {
  static getCount(str: string): number {
    let num: number = 0;
    let i: number = str.length;
    let letters: string[] = ["a", "e", "i", "o", "u"];
    while (i >= 0) {
      letters.forEach((letter) => {
        if (letter === str[i]) {
          num += 1;
        }
      });
      i--;
    }
    return num;
  }
}
