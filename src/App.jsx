 import "./App.css";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import ListPost from "./components/ListPost";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store"; // ✅ import provider

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="social-app">
        <Slidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="custom-container">
          <Header />
          {selectedTab === "Home" ? <ListPost /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;


