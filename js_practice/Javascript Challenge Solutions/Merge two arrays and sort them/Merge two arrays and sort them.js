const mergeAndSort = (a, b) => [...a, ...b].sort((x, y) => x - y);
console.log(mergeAndSort([3, 1, 5], [4, 2])); // [1,2,3,4,5]
