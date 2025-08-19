import "./App.css";
import Header from "./components/header";
import Slidebar from "./components/Slidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import ListPost from "./components/ListPost";
function App() {
  return (
    <>
      <div className="social-app">
        <Slidebar></Slidebar>
        <div className="custom-container">
          <Header />
          <CreatePost></CreatePost>
          <ListPost></ListPost>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
