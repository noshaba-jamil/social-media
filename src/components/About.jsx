import { FaUsers, FaCode, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-4 rounded-4">
        <div className="d-flex align-items-center mb-4">
          <FaUsers size={40} className="text-warning me-3" />
          <h2 className="fw-bold text-dark m-0">About MyApp</h2>
        </div>

        <p className="text-secondary fs-5">
          Welcome to <span className="fw-bold text-dark">MyApp</span> — a modern
          social platform where you can create posts, share ideas, and connect
          with others. Our mission is to make communication simple, engaging,
          and meaningful.
        </p>

        <div className="row text-center mt-4">
          <div className="col-md-4 mb-3">
            <FaCode size={36} className="text-primary mb-2" />
            <h5 className="fw-bold">Built for Developers</h5>
            <p className="text-secondary">Clean UI with modern React + Bootstrap.</p>
          </div>
          <div className="col-md-4 mb-3">
            <FaHeart size={36} className="text-danger mb-2" />
            <h5 className="fw-bold">User Friendly</h5>
            <p className="text-secondary">Simple and intuitive design for everyone.</p>
          </div>
          <div className="col-md-4 mb-3">
            <FaUsers size={36} className="text-success mb-2" />
            <h5 className="fw-bold">Community First</h5>
            <p className="text-secondary">Connect, share, and grow together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
