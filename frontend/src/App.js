import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Create from "./Components/CreateBlog/Create";
import Navbar from "./Components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/blogs";
import EditBlog from "./Components/EditBlog/EditBlog";
import ShowOne from "./Components/ShowOne/ShowOne";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/show/:id" component={ShowOne} />
        <Route exact path="/:id" component={EditBlog} />
      </Switch>
    </>
  );
}

export default App;
