let str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.";

// TODO: pengulangan masing2 char
const munculA = str.split("a").length - 1;
const munculB = str.split("b").length - 1;
const munculC = str.split("c").length - 1;
const munculD = str.split("d").length - 1;
const munculE = str.split("e").length - 1;
const munculF = str.split("f").length - 1;
const munculG = str.split("g").length - 1;
const munculH = str.split("h").length - 1;
const munculI = str.split("i").length - 1;
const munculJ = str.split("j").length - 1;
const munculK = str.split("k").length - 1;
const munculL = str.split("l").length - 1;
const munculM = str.split("m").length - 1;
const munculN = str.split("n").length - 1;
const munculO = str.split("o").length - 1;
const munculP = str.split("p").length - 1;
const munculQ = str.split("q").length - 1;
const munculR = str.split("r").length - 1;
const munculS = str.split("s").length - 1;
const munculT = str.split("t").length - 1;
const munculU = str.split("u").length - 1;
const munculV = str.split("v").length - 1;
const munculW = str.split("w").length - 1;
const munculX = str.split("x").length - 1;
const munculY = str.split("y").length - 1;
const munculZ = str.split("z").length - 1;

console.log("a muncul sebanyak", munculA);
console.log("b muncul sebanyak", munculB);
console.log("c muncul sebanyak", munculC);
console.log("d muncul sebanyak", munculD);
console.log("e muncul sebanyak", munculE);
console.log("f muncul sebanyak", munculF);
console.log("g muncul sebanyak", munculG);
console.log("h muncul sebanyak", munculH);
console.log("i muncul sebanyak", munculI);
console.log("j muncul sebanyak", munculJ);
console.log("k muncul sebanyak", munculK);
console.log("l muncul sebanyak", munculL);
console.log("m muncul sebanyak", munculM);
console.log("n muncul sebanyak", munculN);
console.log("o muncul sebanyak", munculO);
console.log("p muncul sebanyak", munculP);
console.log("q muncul sebanyak", munculQ);
console.log("r muncul sebanyak", munculR);
console.log("s muncul sebanyak", munculS);
console.log("t muncul sebanyak", munculT);
console.log("u muncul sebanyak", munculU);
console.log("v muncul sebanyak", munculV);
console.log("w muncul sebanyak", munculW);
console.log("x muncul sebanyak", munculX);
console.log("y muncul sebanyak", munculY);
console.log("z muncul sebanyak", munculZ);
// ---------------------------------------->

// TODO: dari kalimat tersebut geser character sebanyak 5
function transform(text) {
  var s = text.split("");
  for (var i = 0; i < s.length; i++) {
    // Caesar cipher
    switch (s[i]) {
      case " ":
        break;
      case "z":
        s[i] = "a";
        break;
      case "Z": // One case you forgot to handle
        s[i] = "A";
        break;
      default:
        s[i] = String.fromCharCode(5 + s[i].charCodeAt(0));
    }

    // Upper-case vowels
    switch (s[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        s[i] = s[i].toUpperCase();
    }
  }
  return s.join("");
}

console.log(transform(str));
// ----------------------------------------->
