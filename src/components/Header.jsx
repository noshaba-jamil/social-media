  import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="p-3 bg-dark shadow-sm header">
      <div className="container d-flex flex-wrap align-items-center">
        
        {/* Brand */}
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4"
        >
          
        </a>

        {/* Nav Links */}
        <ul className="nav col-12 col-lg-auto mb-3 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-3 text-white nav-hover">Home</a></li>
          <li><a href="#" className="nav-link px-3 text-white nav-hover">Create Post</a></li>
          <li><a href="#" className="nav-link px-3 text-white nav-hover">Pricing</a></li>
          <li><a href="#" className="nav-link px-3 text-white nav-hover">FAQs</a></li>
          <li><a href="#" className="nav-link px-3 text-white nav-hover">About</a></li>
        </ul>

        {/* Search + Buttons */}
        <div className="d-flex align-items-center ms-auto header-center">
          <form className="me-2" role="search">
            <input
              type="search"
              className="form-control form-control-sm search-input"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <button type="button" className="btn btn-outline-light btn-sm me-2 rounded-pill">
            Login
          </button>
          <button type="button" className="btn btn-warning btn-sm rounded-pill">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
