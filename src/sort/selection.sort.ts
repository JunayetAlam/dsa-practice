import array from "../data/array";

const selectionSort = (arr: number[]) => {
  let sortedArray = [...arr];
  let totalSorted = 0;
  do {
    let smallNumIndex = totalSorted;
    for (let i = totalSorted + 1; i < sortedArray.length; i++) {
      if (sortedArray[smallNumIndex] > sortedArray[i]) {
        smallNumIndex = i;
      }
    }
    if (smallNumIndex !== totalSorted) {
      [sortedArray[totalSorted], sortedArray[smallNumIndex]] = [
        sortedArray[smallNumIndex],
        sortedArray[totalSorted],
      ];
    }
    totalSorted++;
  } while (totalSorted <= sortedArray.length - 1);
  return sortedArray;
};

console.time("sectionSort");
const data = selectionSort(array);
console.log(data);
console.timeEnd("sectionSort");
