import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ShowOne = () => {
  const blog = useSelector((state) => state.blog);
  const { id } = useParams();
  const singleBlog = blog.filter((post) => post._id === id);
  return (
    <div>
      {singleBlog.map((blog) => (
        <div key={blog._id} className="container pt-4">
          <h1>The Infos are: </h1>
          <h5 className="pt-5">{blog.title}</h5>
          <h5 className="">{blog.desc}</h5>
        </div>
      ))}
    </div>
  );
};

export default ShowOne;
