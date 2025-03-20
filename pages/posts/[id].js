import { fetchPostById } from "@/utils/api";

export async function getServerSideProps({ params }) {
  const post = await fetchPostById(params.id);

  return { props: { post } };
}

export default function PostDetail({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
