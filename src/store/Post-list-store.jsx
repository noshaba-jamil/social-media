 import { createContext, useReducer } from "react";

// Context with defaults
const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer function
const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currentPostList]; // new post at top
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);
    default:
      return currentPostList;
  }
};

// ✅ Initial posts with unique IDs
const initialPosts = [
  {
    id: "1",
    title: "Taxila",
    body: "my fav city",
    tags: ["Fav", "mycity"],
    reaction: "4",
  },
  {
    id: "2",
    title: "Lahore",
    body: "city of gardens",
    tags: ["Travel", "Culture"],
    reaction: "8",
  },
  {
    id: "3",
    title: "Karachi",
    body: "city of lights",
    tags: ["Sea", "BigCity"],
    reaction: "10",
  },
  {
    id: "4",
    title: "Islamabad",
    body: "capital city",
    tags: ["Green", "Modern"],
    reaction: "6",
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, initialPosts);

  // Add Post
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  // Delete Post
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: postId,
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
export { PostList };
