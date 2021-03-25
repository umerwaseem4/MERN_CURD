import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(reduxThunk)));

export default store;
