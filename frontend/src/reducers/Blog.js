const blog = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;
    case "POST_BLOG":
      return [...state, action.payload];
      break;
    case "DELETE_BLOG":
      return state.filter((blog) => blog._id !== action.payload);
      break;
    case "UPDATE":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : state
      );
      break;
    default:
      return state;
      break;
  }
};

export default blog;
