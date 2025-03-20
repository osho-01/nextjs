import { render, screen } from "@testing-library/react";
import PostCard from "../../components/PostCard";

test("renders post title", () => {
  const post = { id: 1, title: "Test Post", body: "This is a test body." };
  render(<PostCard post={post} />);
  
  expect(screen.getByText("Test Post")).toBeInTheDocument();
});