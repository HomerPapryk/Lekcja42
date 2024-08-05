function uniqArray(arr) {
  return [...new Set(arr)];
}

console.log(uniqArray([1, 1, 1, 4, null, 6, null, 9, 9, 9])); // Output: [1, 4, null, 6, 9]
