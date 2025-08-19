 import "./App.css";
import Header from "./components/header";
import Slidebar from "./components/Slidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import ListPost from "./components/ListPost";
import { useState } from "react";

function App() {
  // ✅ useState should be declared here, before return
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className="social-app">
        <Slidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="custom-container">
          <Header />
          {selectedTab==="Home"? (<ListPost />):(  <CreatePost />)}
        

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
