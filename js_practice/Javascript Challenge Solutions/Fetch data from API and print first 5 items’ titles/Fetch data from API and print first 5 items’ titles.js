const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  data.slice(0, 5).forEach(post => console.log(post.title));
};
fetchPosts();