import array from "../data/array";

const bubbleSort = (arr: number[]) => {
  let sortedArr = [...arr];
  let n = sortedArr.length;
  let swapped = false;
  do {
    swapped = false;
    for (let i: number = 0; i < n; i++) {
      let currentNum = sortedArr[i];
      let nextNum = sortedArr[i + 1];

      if (i + 1 === n) break;

      if (currentNum > nextNum) {
        sortedArr[i] = nextNum;
        sortedArr[i + 1] = currentNum;
        swapped = true;
      }
    }
    n--;
  } while (n > 0 || swapped);

  return sortedArr;
};

console.time("bubbleSort");

const data = bubbleSort(array);

console.timeEnd("bubbleSort");

console.log(data);
