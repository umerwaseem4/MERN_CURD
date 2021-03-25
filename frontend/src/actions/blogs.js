import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetch_blogs();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const postBlog = (post) => async (dispatch) => {
  try {
    const { data } = await api.post_blogs(post);
    dispatch({ type: "POST_BLOG", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBlog = (id, blog) => async (dispatch) => {
  try {
    const { data } = await api.update_blogs(id, blog);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    await api.delete_blogs(id);
    dispatch({ type: "DELETE_BLOG", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
