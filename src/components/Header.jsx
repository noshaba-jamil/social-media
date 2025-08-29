 import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaInfoCircle } from "react-icons/fa";
import { SiCreatereactapp } from "react-icons/si";

const Header = () => {
  return (
    <header className="p-3 bg-dark shadow-sm header">
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
        
        {/* Brand / Logo */}
        <Link
          to="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4"
        >
          <h4 className="m-0"><SiCreatereactapp className="ms-2" /></h4>
        </Link>

        {/* Nav Links with Icons */}
        <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link
              to="/"
              className="nav-link px-3 text-white nav-hover d-flex align-items-center"
            >
              <FaHome className="me-2" /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/create-post"
              className="nav-link px-3 text-white nav-hover d-flex align-items-center"
            >
              <FaPlusCircle className="me-2" /> Create Post
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link px-3 text-white nav-hover d-flex align-items-center"
            >
              <FaInfoCircle className="me-2" /> About
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control search-input"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        {/* Login / Sign-up */}
        <div className="header-actions">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
