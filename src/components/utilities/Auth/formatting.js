export function thousandSeparator(n) {
  n = String(n).split("");
  let output = [];
  for (let i = n.length - 1, j = 1; i >= 0; i--, j++) {
    output.unshift(n[i]);
    if (j % 3 === 0 && j < n.length && n[i] !== ".") {
      output.unshift(",");
    }
  }
  return output.join("");
}
