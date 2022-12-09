import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold"> Login:</h1>
      <div className="flex content-center">
        <div className="ml-64 p-5 h-full col-span-1 grid grid-cols-1 pl-80">
          <div className="start bg-red-400 w-4/5 border-bg-black rounded-2xl">
            <div className="card p-8 m-5 border-2 bg-red-300 rounded-2xl">
              <form className="form login-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address:
                  </label>
                  <input
                    className="form-input form-control"
                    type="text"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput">Password:</label>
                  <input
                    className="form-input form-control"
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
