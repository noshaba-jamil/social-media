import { useState, useContext } from "react";
import { PostList } from "../store/Post-list-store";
import { fetchCityImage } from "../utilites/fetchCityImage";
 

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [reaction, setReaction] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // 1) Fetch city image based on the title
    const imageUrl = await fetchCityImage(title);

    // 2) Build the post
    const newPost = {
      id: Date.now().toString(),
      title,
      body,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      reaction: reaction || "0",
      image: imageUrl, // ✅ attach image
    };

    // 3) Add and reset
    addPost(newPost);
    setTitle("");
    setBody("");
    setTags("");
    setReaction("");
    setSubmitting(false);
  };

  return (
    <div className="createpost">
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Post Title (City Name)</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Lahore, Karachi, Islamabad"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Post Body</label>
        <textarea
          className="form-control"
          rows="3"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Tags (comma separated)</label>
        <input
          type="text"
          className="form-control"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Fav, mycity"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Reactions</label>
        <input
          type="number"
          className="form-control"
          value={reaction}
          onChange={(e) => setReaction(e.target.value)}
          min="0"
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Adding..." : "Add Post"}
      </button>
    </form>
    </div>
  );
};

export default CreatePost;

