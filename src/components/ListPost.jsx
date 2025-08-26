 import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/Post-list-store";
import WellcomeMessage from "../components/WellcomeMessage";
import Loading from "../components/Loading"; // make sure path is correct

const ListPost = () => {
  const { postList, setPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  const handleGetPosts = () => {
    setFetching(true); // ✅ start loading before fetch
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts); // ✅ replace state with API posts
        setFetching(false);   // ✅ stop loading when done
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setFetching(false); // ✅ stop loading even if error
      });
  };

  return (
    <div className="post-list"> {/* ✅ fixed here */}
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && (
        <WellcomeMessage onGetPosts={handleGetPosts} />
      )}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default ListPost;

