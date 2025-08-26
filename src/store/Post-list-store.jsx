  import { createContext, useReducer } from "react";

// Context with defaults
const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  setPosts: () => {},   // NEW ✅
});

// Reducer function
const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currentPostList];

    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);

    case "SET_POSTS":   // NEW ✅ replace entire list
      return action.payload;

    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // Add single post
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  // Delete post
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: postId,
    });
  };

  // Set posts (e.g., fetched from API)
  const setPosts = (posts) => {
    dispatchPostList({
      type: "SET_POSTS",
      payload: posts,
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, setPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
export { PostList };
