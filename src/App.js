import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home";
import Products from "./component/Products/Products";
import Contact from "./component/Contact/Contact";
import Cart from "./component/Cart/Cart";
import GlobalDataProvider from "./component/global-data-provider/Provider";

export default class App extends Component {
  render() {
    return (
      <GlobalDataProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Products} path="/Products" />
            <Route component={Cart} path="/Cart" />
            <Route component={Contact} path="/Contact" />
          </Switch>
        </div>
      </GlobalDataProvider>
    );
  }
}
