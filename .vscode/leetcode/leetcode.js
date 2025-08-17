// low and high
// while loop - find mid ><target
// low2-high2 -> mid2 <>target
//1. binary search
//2. low , high iig ni todorhoil
//3.
// arr = [1, 2, 3, 4, 3, 5, 6, 7, 8, 9];
// function binarySeacrch(arr, low, high) {
//   let low = arr[0];
//   let high = arr[length];
//   let x = 6;
//   while ((arr[i] = x)) {
//     let mid = (low + high) / 2;
//     if (mid === x) {
//       return x;
//     } else {
//       if (mid > x) {
//         high = min[i - 1];
//         mid = (low + high) / 2;
//       }
//     }
//   }
// }

num = "6777133339";

function largestGoodInteger(n) {
  n.split("");
  let number = [];

  for (i = 0; i < n.length; i++) {
    if (n[i] === n[i + 1] && n[i + 1] === n[i + 2]) {
      console.log(n[i + 3]);
      return (number = n[i] + n[i + 1] + n[i + 2]);
    } else {
      return number.toString();
    }
  }
}
const result = largestGoodInteger(num);
