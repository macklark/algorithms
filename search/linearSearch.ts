const fewData: (number | string)[] = [1, "a", 45, "jkl", 78];

function LinearSearch(data: any[], target: any) {
  for (let i = 0; i < data.length; i++) {
    if (fewData[i] === target) {
      return "Found at index " + i;
    }
  }
  return -1;
}
