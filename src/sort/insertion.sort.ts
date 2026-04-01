import array from "../data/array";

// <---- My Initial Way ---->
// const insertionSort = (arr: number[]) => {
//   let sortedArr: number[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (sortedArr.length === 0) {
//       sortedArr.push(num);
//     } else {
//       let checkingNumber = sortedArr.length;
//       for (let x = 0; x < checkingNumber; x++) {
//         const currentNum = sortedArr[x];
//         if (num < currentNum) {
//           sortedArr.splice(x, 0, num);
//           break;
//         } else if (x === sortedArr.length - 1) {
//           sortedArr.push(num);
//         }
//       }
//     }
//   }

//   return sortedArr;
// };

// <---- Optimized Way ---->
const insertionSort = (arr: number[]) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = element;
  }
  return arr;
};

console.time("insertionSort");
const data = insertionSort(array);
console.log(JSON.stringify(data));
console.timeEnd("insertionSort");
