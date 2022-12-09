import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1 className="text-white text-3xl font-bold"> Login:</h1>
      <div className="flex ml-20 place-content-center">
        <div className="flex p-5">
          <div className=" bg-red-400 w-4/5 rounded-2xl">
            <div className="p-8 m-5 border-2 bg-red-300 rounded-2xl">
              <form className="form login-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address:
                  </label>
                  <input
                    className="block w-full place-content-center form-input form-control"
                    type="text"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput">Password:</label>
                  <input
                    className="block w-full form-input form-control"
                    type="password"
                    id="passwordInput"
                  />
                </div>
                <div className="BtnSpace">
                  <button
                    className="loginBtn btn-primary border-2 bg-white p-3 m-5 rounded-2xl hover:bg-amber-500"
                    type="login"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
      <Link className=" loginBtn btn-primary border-2 bg-white p-3 m-5 rounded-2xl hover:bg-amber-500" to='/signup'>Create new account</Link>
      </div>
      
    </div>
  );
};

export default Login;
