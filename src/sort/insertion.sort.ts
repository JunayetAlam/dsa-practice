import array from "../data/array";

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
