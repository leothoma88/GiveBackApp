import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

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
                    onChange={handleInputChange}
                    className="block w-full place-content-center form-input form-control"
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput">Password:</label>
                  <input
                    onChange={handleInputChange}
                    className="block w-full form-input form-control"
                    type="password"
                    name="password"
                    id="passwordInput"
                  />
                </div>
                <div className="BtnSpace">
                  <button
                    onClick={handleFormSubmit}
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
        <Link
          className=" loginBtn btn-primary border-2 bg-white p-3 m-5 rounded-2xl hover:bg-amber-500"
          to="/signup"
        >
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
