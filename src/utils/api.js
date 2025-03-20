const API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
}
