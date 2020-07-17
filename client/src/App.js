import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/home">Home Page</Link>
        <Link to="/protected">Protected Page</Link>

        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <PrivateRoute path='/protected' component={Protected} />
      </div>
    </Router>
  );
}


export default App;
