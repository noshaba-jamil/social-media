 import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

const Slidebar = ({ selectedTab, setSelectedTab }) => {
  const navItems = [
    { id: "Home", label: "Home", icon: <AiFillHome size={22} /> },
    { id: "CreatePost", label: "Create Post", icon: <FiPlusCircle size={22} /> },
  ];

  return (
    <div
      className="d-flex flex-column p-3 bg-dark text-white shadow-lg"
      style={{ width: "120px", minHeight: "100vh", borderRight: "1px solid #333" }}
    >
      {/* Logo / Brand */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <FaUsers size={28} className="text-warning me-2" />
        <h5 className="m-0 fw-bold text-warning">MyApp</h5>
      </div>

      {/* Navigation */}
      <ul className="nav nav-pills flex-column gap-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`w-100 nav-link d-flex align-items-center gap-2 rounded-3 border-0 text-start ${
                selectedTab === item.id
                  ? "active bg-warning text-dark fw-bold shadow-sm"
                  : "text-white"
              }`}
              onClick={() => setSelectedTab(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.icon}
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto text-center small text-secondary">
        © 2025 MyApp
      </div>
    </div>
  );
};

export default Slidebar;

