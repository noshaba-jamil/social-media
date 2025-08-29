 import "./App.css";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Footer from "./components/Footer";
 

import PostListProvider, { PostList } from "./store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="social-app">
        <Slidebar />
        <div className="custom-container">
          <Header />

        <Outlet></Outlet>
         
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
