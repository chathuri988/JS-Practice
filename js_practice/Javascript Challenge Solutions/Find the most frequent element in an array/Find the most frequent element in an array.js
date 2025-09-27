const mostFrequent = arr => {
  const freq = {};
  arr.forEach(n => freq[n] = (freq[n] || 0) + 1);
  return Object.keys(freq).reduce((a, b) => 
    freq[a] > freq[b] ? a : b
  );
};
console.log(mostFrequent([1,2,2,3,3,3,4])); // "3"