import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

import "./styles.scss";

// private route better with own component since it can be placed in other locations as well
// component: on the left of the = sign means renaming
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

// const user = {
//   name: "",
//   password: "",
//   friends: []
// }

// //destructure with {} on ht elefthand side
// ... on the left means the rest, on the right means spread operator ...passwordlessUser meaning all the rest in the object would display
// const {password, ...passwordlessUser} = user