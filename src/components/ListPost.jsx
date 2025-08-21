 import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/Post-list-store";

const ListPost = () => {
  // ✅ get postList from context
  const { postList } = useContext(PostListContext);

  return (
    <><div className="post-list">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      </div>
    </>
  );
};

export default ListPost;

