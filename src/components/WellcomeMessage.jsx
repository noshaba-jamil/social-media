 const WellcomeMessage = ({ onGetPosts }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
      <h2>No posts yet 📭</h2>
      <p>Click below to fetch some dummy posts.</p>
      <button 
        onClick={onGetPosts} 
        style={{ padding: "10px 20px", cursor: "pointer", marginTop: "10px" }}
      >
        Get Posts
      </button>
    </div>
  );
};

export default WellcomeMessage;
