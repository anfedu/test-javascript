let array = [
  1,
  2,
  33,
  44,
  55,
  33,
  44,
  22,
  44,
  33,
  2,
  77,
  66,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  89,
  3,
  3,
  8,
  9,
  75,
  4,
  3,
  2,
  2,
  1,
  3,
];

// TODO: membagi array menjadi 3 kelompok
const a = array.splice(0, 7);
const b = array.splice(0, 7);
const c = array.splice(0, 8);
console.log(a, b, c);
// ---------------------->

// TODO: mengurutkan masing2 array
const sortedA = a.slice().sort(function (a, b) {
  return a - b;
});
const sortedB = b.slice().sort(function (a, b) {
  return a - b;
});
const sortedC = c.slice().sort(function (a, b) {
  return a - b;
});
console.log(
  "sorteda: ",
  sortedA,
  "\n",
  "sortedb: ",
  sortedB,
  "\n",
  "sortedc: ",
  sortedC
);
// ---------------------->

// TODO: hitung total setiap kelompok data
const sumArrA = sortedA.reduce((a, b) => a + b, 0);
const sumArrB = sortedB.reduce((a, b) => a + b, 0);
const sumArrC = sortedC.reduce((a, b) => a + b, 0);
console.log(
  "sumArrA:",
  sumArrA,
  "\n",
  "sumArrB:",
  sumArrB,
  "\n",
  "sumArrC:",
  sumArrC
);
// ---------------------->

// TODO: hitung rata2 setiap kelompok data
function arrayAverage(arr) {
  var sum = 0;
  for (var i in arr) {
    sum += arr[i];
  }
  var numbersCnt = arr.length;
  return sum / numbersCnt;
}
const averageA = arrayAverage(a);
const averageB = arrayAverage(b);
const averageC = arrayAverage(c);
console.log(
  "averageA:",
  averageA,
  "\n",
  "averageB:",
  averageB,
  "\n",
  "averageC:",
  averageC
);
// ---------------------->

// TODO: mencari nilai terendah dan tertinggi dari kelompok array
const maxA = Math.max(...a);
const minA = Math.min(...a);
const maxB = Math.max(...b);
const minB = Math.min(...b);
const maxC = Math.max(...c);
const minC = Math.min(...c);
console.log(
  "minA, maxA:",
  minA,
  ", ",
  maxA,
  "\n",
  "minB, maxB:",
  minB,
  ", ",
  maxB,
  "\n",
  "minC, maxC:",
  minC,
  ", ",
  maxC
);
// ---------------------->
