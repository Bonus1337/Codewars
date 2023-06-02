export class Kata {
  static disemvowel(str: string): string {
    const letters: string[] = ["a", "e", "i", "o", "u"];
    let answer: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (!letters.includes(str[i].toLowerCase())) {
        answer += str[i];
      }
    }
    return answer;
  }
}
