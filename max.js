// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.once("line", () => {
  rl.on("line", readLine);
});

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// while (true) {
//   let counter = getRandomInt(10);
//   if (counter < 2) counter = 2;
//   let arr = [];
//   for (let i = 0; i < counter; i++) {
//     arr.push(getRandomInt(10000000));
//   }
//   console.log(counter);
//   console.log(arr);
//   let max2 = oldMax(arr);
//   let max1 = max(arr);
//   console.log("old Fix", max2);
//   console.log("my Fix", max1);
//   console.log("________________________________");
//   if (max1 != max2) {
//     break;
//   }
// }

function readLine(line) {
  const arr = line.toString().split(" ").map(Number);

  console.log(max(arr));
  process.exit();
}

function max(arr) {
  // write your code
  if (arr.length < 2) {
    if (arr.length < 1) {
      return 0;
    } else {
      return arr[0];
    }
  } else {
    let max1 = Math.max(...arr);
    // console.log("Max 1--->", max1);
    let indexMax1 = arr.indexOf(max1);
    arr.splice(indexMax1, 1);
    let max2 = Math.max(...arr);
    // console.log("Max 2--->", max2);
    return max1 * max2;
  }
}
// function oldMax(arr) {
//   let n = arr.length;
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       console.log("i,j", i + "," + j);
//       console.log("i*j", `${arr[i]}*${arr[j]}`);
//       console.log("result: ", arr[i] * arr[j]);
//       if (arr[i] * arr[j] > result) {
//         result = arr[i] * arr[j];
//       }
//     }
//   }
//   return result;
// }

module.exports = max;
