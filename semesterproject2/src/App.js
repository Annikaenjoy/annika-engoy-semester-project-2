import logo from "./logo.svg";
import "./sass/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Products from "./views/Products";
import Profile from "./views/Profile";
import Cart from "./views/Cart";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
