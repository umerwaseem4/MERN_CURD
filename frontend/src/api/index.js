import axios from "axios";

const url = "http://localhost:5000/api/blogs";

export const fetch_blogs = () => axios.get(url);
export const post_blogs = (post) => axios.post(url, post);
export const delete_blogs = (id) => axios.delete(`${url}/${id}`);
export const update_blogs = (id, updatedBlog) =>
  axios.patch(`${url}/${id}`, updatedBlog);
