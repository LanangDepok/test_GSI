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
  const converted = inputValue
    .split("")
    .map((value) => {
      if (!conversion.hasOwnProperty(value)) {
        return "Input mengandung karakter yang tidak diperbolehkan.";
      }

      return conversion[value];
    })
    .join("");
  console.log(`Hasil konversi: ${converted}`);
  rl.close();
});
