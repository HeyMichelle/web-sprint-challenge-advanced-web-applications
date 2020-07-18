import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

import "./styles.scss";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        
        <Link to="/">Login</Link>

        <Route exact path="/" component={Login} />
        <PrivateRoute path="/BubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}


export default App;
