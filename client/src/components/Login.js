import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = () => {
    axios.post('endpoint/here', userCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      }
  }

  import { axiosWithAuth } from '../../path/to/axiosAuth.js';
  // etc
  axiosWithAuth().get('endpoint/path/here').then(data => /* do something with the data */);

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
