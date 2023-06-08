export const sigmadexInputStyles = {
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: 10,
  color: "#404C55",
  width: "100%",
  height: 56,
  padding: 15,
  fontSize: 16,
  marginTop: 5,
};

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
