import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

const Login = (props) => {
 const [credentials, setCredentials] = useState({});
//  const [setState] = useState({});
  
  // state = {
  //   credentials: {
  //     username: 'Lambda School',
  //     password: 'i<3Lambd4'
  //   },
  //   isLoading: false
  // }

  const loginCred = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log('Login post request response', res)
        localStorage.setItem('token', res.data.payload);
        // window.localStorage.setItem('token', res.data.payload)
        // setTimeout(() => {
        //   setState({ isLoading: false })
        //   props.history.push('/BubblePage') //why don't I use this.props etc here?
        // }, 500)
        props.history.push('/BubblePage');
      })
      .catch(err => console.log(err))
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }


    return (
      <div className="loginContainer">
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={loginCred}>
          <label>Lambda School</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>{`i<3Lambd4`}</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit">Log in</button>
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
