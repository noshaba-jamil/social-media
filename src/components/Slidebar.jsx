 import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { FaUsers } from "react-icons/fa"; // logo-style icon

const Slidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column p-3 bg-dark text-white shadow-lg"
      style={{ width: "200px", minHeight: "100vh", borderRight: "1px solid #333" }}
    >
      {/* Logo / Brand */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <FaUsers size={28} className="text-warning me-2" />
        <h5 className="m-0 fw-bold text-warning">MyApp</h5>
      </div>
      
      {/* Navigation */}
      <ul className="nav nav-pills flex-column gap-2">
        <li>
          <a
            href="#"
            className={`nav-link d-flex align-items-center gap-2 rounded-3 
              ${selectedTab === "Home" ? "active bg-warning text-dark fw-bold" : "text-white"}`}
            onClick={() => setSelectedTab("Home")}
          >
            <AiFillHome size={22} />
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link d-flex align-items-center gap-2 rounded-3 
              ${selectedTab === "CreatePost" ? "active bg-warning text-dark fw-bold" : "text-white"}`}
            onClick={() => setSelectedTab("CreatePost")}
          >
            <FiPlusCircle size={22} />
            Create Post
          </a>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-auto text-center small text-secondary">
        © 2025 MyApp
      </div>
    </div>
  );
};

export default Slidebar;
