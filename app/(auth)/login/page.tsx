/* eslint-disable react/button-has-type */

'use client';

import React from 'react';
import axios from 'axios';

const loginAction = async (): Promise<void> => {
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

  await axios
    .post(`${process.env.NEXT_PUBLIC_APP_API}/api/v1/login`, {
      email: 'admin@email.com',
      password: 'password',
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error('Login failed:', error);
    });
};

function Login() {
  return (
    <div>
      <button onClick={loginAction}>Login</button>
    </div>
  );
}

export default Login;
