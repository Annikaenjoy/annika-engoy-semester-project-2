import React from 'react';
import logo from "./logo.svg";
import "./sass/style.scss";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

import GlobalContext from './context/GlobalContext';

import Home from "./views/Home";
import Products from "./views/Products";
import Admin from "./views/Admin";
import Cart from "./views/Cart";
import Login from "./views/Login";


const App = () => {


   const Global = React.useContext(GlobalContext)

   const loggedIn = Global._USER_AUTH


  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/admin">
          {!loggedIn ? <Redirect to="/login" /> :   <Admin />}
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        
        <Route path="/login">
       {loggedIn ? <Redirect to="/admin" /> : <Login />}
      </Route>
      </Switch>
    </Router>
       
  );
};
export default App;
