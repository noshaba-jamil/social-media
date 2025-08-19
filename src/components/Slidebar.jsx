 import 'bootstrap/dist/css/bootstrap.min.css';

const Slidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "180px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a
            href="#"
            className={`nav-link ${selectedTab === "Home" ? "active" : "text-white"}`}
            onClick={() => setSelectedTab("Home")}
          >
            Home
          </a>
        </li>
        
        <li>
          <a
            href="#"
            className={`nav-link ${selectedTab === "CreatePost" ? "active" : "text-white"}`}
            onClick={() => setSelectedTab("CreatePost")}
          >
            Create Post
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Slidebar;
