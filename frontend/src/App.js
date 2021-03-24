import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Create from "./Components/CreateBlog/Create";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </>
  );
}

export default App;
