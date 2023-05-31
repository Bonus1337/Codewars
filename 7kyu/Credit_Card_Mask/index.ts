export function maskify(cc: string): string {
  if (cc.length < 4) {
    return cc;
  } else {
    let mask = "#".repeat(cc.length - 4);
    return mask + cc.slice(-4);
  }
}
