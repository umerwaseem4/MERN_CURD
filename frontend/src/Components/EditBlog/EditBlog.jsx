import React, { useState } from "react";
// import classes from "./create.module.css";
import { updateBlog } from "../../actions/blogs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Create = () => {
  const [post, setPost] = useState({
    title: "",
    desc: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlog(id, post));
    history.push("/");
  };
  console.log(post);
  return (
    <div className={`container`}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <div id="emailHelp" className="form-text">
            Enter the title of the blog.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
