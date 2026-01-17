const numbers: number[] = [4, 8, 34, 47, 58];

function BinarySearch(data: number[], target: number): number {
  let start = 0;
  let end = data.length;

  while (start <= end) {
    const mid: number = Math.floor((start + end) / 2);

    if (data[mid] == target) return mid;
    else if (data[mid] <= target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}
