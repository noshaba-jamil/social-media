 import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList; // placeholder reducer
};

// ✅ Initial posts (fixed syntax)
const initialPosts = [
  {
    id: "1",
    title: "Taxila",
    body: "my fav city",
    tags: ["Fav", "mycity"],
  },
   {
    id: "2",
    title: "Taxila",
    body: "my fav city",
    tags: ["Fav", "mycity"],
  } ,{
    id: "2",
    title: "Taxila",
    body: "my fav city",
    tags: ["Fav", "mycity"],
  },
    {
    id: "2",
    title: "Taxila",
    body: "my fav city",
    tags: ["Fav", "mycity"],
  }
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, initialPosts);

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
export { PostList };
