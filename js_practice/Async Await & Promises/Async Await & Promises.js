// Promise
const fetchData = () => new Promise(resolve => {
  setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData().then(result => console.log("Promise result:", result));

// Async/Await
const load = async () => {
  const result = await fetchData();
  console.log("Async/Await result:", result);
};
load();
