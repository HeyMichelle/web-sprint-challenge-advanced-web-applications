import React, { useState } from 'react';
import { axiosWithAuth } from '../path/to/module';

const Login = (props) => {
 const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('login/endpoint', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/');
      })
  }

  const handleChange = e => {
      setCredentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      }
  }

    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;

// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route

  
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
//       <p>Build a login page here</p>
//     </>
//   );
// };

// export default Login;


// const login = () => {
//   axios.post('endpoint/here', userCredentials)
//     .then(res => {
//       localStorage.setItem('token', res.data.token);
//       props.history.push('/dashboard');
//     }
// }

// import { axiosWithAuth } from '../../path/to/axiosAuth.js';
// // etc
// axiosWithAuth().get('endpoint/path/here').then(data => /* do something with the data */);
