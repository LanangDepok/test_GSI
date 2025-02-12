const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const conversion = {
  A: 0,
  B: 1,
  C: 1,
  D: 1,
  E: 2,
  F: 3,
  G: 3,
  H: 3,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 5,
  N: 5,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 7,
  U: 8,
  V: 9,
  W: 9,
  X: 9,
  Y: 9,
  Z: 9,
  a: 9,
  b: 8,
  c: 8,
  d: 8,
  e: 7,
  f: 6,
  g: 6,
  h: 6,
  i: 5,
  j: 4,
  k: 4,
  l: 4,
  m: 4,
  n: 4,
  o: 3,
  p: 2,
  q: 2,
  r: 2,
  s: 2,
  t: 2,
  u: 1,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
  " ": 0,
};

rl.question("Masukkan kalimat: ", (inputValue) => {
  const converted = inputValue.split("").map((char) => conversion[char]);

  let result = converted[0];
  for (let i = 1; i < inputValue.length; i++) {
    if (typeof converted[i] !== "number" || typeof result !== "number") {
      result = "Input mengandung karakter yang tidak diperbolehkan.";
      break;
    }
    result = i % 2 !== 0 ? result + converted[i] : result - converted[i];
  }

  if (typeof result !== "number") {
    console.log(result);
    rl.close();
    return;
  }

  result = Math.abs(result);

  let m = 0;
  while ((m * (m + 1)) / 2 <= result) {
    m++;
  }
  m--;

  const baseSum = (m * (m + 1)) / 2;
  const remainder = result - baseSum;

  let breakdown = [];
  for (let i = 0; i <= m; i++) {
    breakdown.push(i);
  }
  for (let i = 0; i < remainder; i++) {
    breakdown.push(0, 1);
  }

  const digitToLetter = {
    0: "A",
    1: "B",
    2: "E",
    3: "F",
    4: "I",
    5: "J",
    6: "O",
    7: "P",
    8: "U",
    9: "V",
  };

  let newBreakdown = [...breakdown];
  if (newBreakdown.length >= 2) {
    newBreakdown[newBreakdown.length - 2] += 1;
    newBreakdown[newBreakdown.length - 1] += 1;
  } else if (newBreakdown.length === 1) {
    newBreakdown[0] += 1;
  }

  const finalOutput = newBreakdown
    .map((digit) => digitToLetter[digit])
    .join("");
  console.log(finalOutput);
  rl.close();
});
