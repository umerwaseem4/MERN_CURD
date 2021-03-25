import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog } from "../../actions/blogs";

const ShowBlogs = () => {
  const posts = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        margin: "2rem 3rem",
      }}
    >
      {posts.map((post) => (
        <div
          key={post._id}
          className="card"
          style={{ width: "18rem", padding: "1rem" }}
        >
          <div className="card-body" style={{ padding: "1rem" }}>
            <Link to={`/show/${post._id}`}>
              <h5 className="card-title">{post.title}</h5>
            </Link>
            <p className="card-text">{post.desc}</p>
            <Link
              to={`${post._id}`}
              style={{ margin: "10px" }}
              className="btn btn-info"
            >
              Edit
            </Link>
            <button
              onClick={() => dispatch(deleteBlog(post._id))}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowBlogs;
