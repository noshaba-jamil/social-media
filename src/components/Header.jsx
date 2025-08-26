  import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaPlusCircle, FaTags, FaQuestionCircle, FaInfoCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="p-3 bg-dark shadow-sm header">
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
        
        {/* Brand */}
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4"
        >
           
        </a>

        {/* Nav Links with Icons */}
        <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-3 text-white nav-hover d-flex align-items-center">
              <FaHome className="me-2" /> Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-3 text-white nav-hover d-flex align-items-center">
              <FaPlusCircle className="me-2" /> Create Post
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-3 text-white nav-hover d-flex align-items-center">
              <FaTags className="me-2" /> Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-3 text-white nav-hover d-flex align-items-center">
              <FaQuestionCircle className="me-2" /> FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-3 text-white nav-hover d-flex align-items-center">
              <FaInfoCircle className="me-2" /> About
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
