const cetak = (x, y) => {
  let str = "";

  for (let i = 0; i < y; i++) {
    str = str.concat(i + 1);
    str = str.concat("0".repeat((x -= 1)));
    str = str.concat(`\n`);
  }
  console.log(str);
};

console.log(cetak(7, 7));
