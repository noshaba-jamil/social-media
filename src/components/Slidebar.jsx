 import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // ✅ use NavLink for active style

const Slidebar = () => {
  const navItems = [
    { id: "Home", label: "Home", icon: <AiFillHome size={22} />, path: "/" },
    { id: "CreatePost", label: "Create Post", icon: <FiPlusCircle size={22} />, path: "/create-post" },
  ];

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
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `w-100 nav-link d-flex align-items-center gap-2 rounded-3 border-0 text-start ${
                  isActive
                    ? "active bg-warning text-dark fw-bold shadow-sm"
                    : "text-white"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
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
