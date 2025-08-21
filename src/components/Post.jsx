 const Post = ({ post }) => {
  return (
    <div className="card mb-3 mypost" style={{ width: "15rem" }}>
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger  reaction">
  99+
   
</span>

        <p className="card-text">{post.body}</p>
        <div>
          {post.tags.map((tag, index) => (
            <a key={index} href="#" className="btn btn-primary btn-sm me-2">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
