// TODO: membuat angka random dari 1 sampai 100
const random = Math.floor(Math.random() * 101);
console.log("random number: ", random);
// --------------------------------------->

// TODO: membuat angka random dengan javascript
function guessNumber(number) {
  for (i = 0; i < 100; i++) {
    if (Math.floor(Math.random() * 100) === number) {
      console.log(`Angka anda yaitu ${number} tepat setelah ${i} kali`);
    }
  }
}

guessNumber(8);
// --------------------------------------->
