import PostCard from "../components/PostCard";
import { fetchPosts } from "@/utils/api";
import { useState } from "react";

export async function getStaticProps() {
  const posts = await fetchPosts();
  return { props: { posts } };
}

export default function Home({ posts }) {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
