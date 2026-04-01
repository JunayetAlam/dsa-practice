import array from "../data/array";

const insertionSort = (arr: number[]) => {
  let sortedArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (sortedArr.length === 0) {
      sortedArr.push(num);
    } else {
      let checkingNumber = sortedArr.length;
      for (let x = 0; x < checkingNumber; x++) {
        const currentNum = sortedArr[x];
        if (num < currentNum) {
          sortedArr.splice(x, 0, num);
          break;
        } else if (x === sortedArr.length - 1) {
          sortedArr.push(num);
        }
      }
    }
  }

  return sortedArr;
};

console.time("insertionSort");
const data = insertionSort(array);
console.log(JSON.stringify(data));
console.timeEnd("insertionSort");
