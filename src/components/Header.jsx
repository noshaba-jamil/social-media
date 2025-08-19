 import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="p-2 bg-dark">
      <div className="container d-flex flex-wrap align-items-center">
        
        {/* Brand */}
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4"
        >
       <span className="fw-bold fs-5 text-warning">Social-Media</span>


        </a>

        {/* Nav Links */}
        <ul className="nav col-12 col-lg-auto mb-3 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        {/* Search + Buttons aligned right */}
        <div className="d-flex align-items-center ms-auto">
          <form className="me-2" role="search">
            <input
              type="search"
              className="form-control form-control-sm"
              placeholder="Search..."
              aria-label="Search"
              style={{ width: "140px" }}
            />
          </form>

          <button type="button" className="btn btn-outline-light btn-sm me-2">
            Login
          </button>
          <button type="button" className="btn btn-warning btn-sm">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


