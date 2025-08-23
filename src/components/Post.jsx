  import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card mb-3 mypost" style={{ width: "15rem" }}>
      {/* ✅ image on top */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="card-img-top"
          style={{ height: "150px", objectFit: "cover" }}
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ cursor: "pointer" }}
          onClick={() => deletePost(post.id)}
          title="Delete post"
        >
          <MdDelete />
        </span>

        <p className="card-text">{post.body}</p>

        <div>
          {post.tags?.map((tag, index) => (
            <a key={index} href="#" className="btn btn-primary btn-sm me-2">
              {tag}
            </a>
          ))}

          <div className="alert alert-danger reaction mt-2" role="alert">
            It has been reacted by {post.reaction} people
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
