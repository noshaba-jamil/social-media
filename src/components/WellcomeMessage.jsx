 const WellcomeMessage = ({ onGetPosts }) => {
  return (
    <div className="card text-center welcome-card">
      <div className="card-header">
        📌 Welcome
      </div>
      <div className="card-body">
        <h5 className="card-title">No posts yet 📭</h5>
        <p className="card-text">Click below to fetch some dummy posts.</p>
        <button onClick={onGetPosts} className="btn btn-warning">
          Get Posts
        </button>
      </div>
      <div className="card-footer text-body-secondary">
        Waiting for posts...
      </div>
    </div>
  );
};

export default WellcomeMessage;
