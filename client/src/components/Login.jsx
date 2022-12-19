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
    <div className="flex flex-col justify-center w-full h-full bg-[#df3e56] ">
      <div className="w-full mx-auto text-center text-[#FCFFE7] bg-[#df3e56] pt-12">
        <h1 className="text-5xl md:text-5xl sm:text-4xl font-bold p-6">
          Join the GiveBack!
        </h1>

        <div className="flex flex-row place-content-center mb-12">
          <div className="flex p-5">
            <div className="p-8 m-5 border-2 bg-[#191f3d] border-[#191f3d] rounded-2xl w-[20rem] sm:w-[20rem] md:w-[40rem] lg:w-[40rem]">
              <p className="text-[#FCFFE7] text-xl mb-4">
                Already have an account?
              </p>
              <form className="form login-form">
                <div className="form-group">
                  <input
                    onChange={handleInputChange}
                    className="block place-content-center form-input form-control bg-[#FCFFE7] w-full rounded-md h-[35px] text-[#191f3d] p-2"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    htmlFor="email"
                  />
                </div>
                <div className="form-group mt-6">
                  <input
                    onChange={handleInputChange}
                    className="block place-content-center form-input form-control bg-[#FCFFE7] w-full rounded-md h-[35px] text-[#191f3d] p-2"
                    type="password"
                    name="password"
                    id="passwordInput"
                    htmlFor="passwordInput"
                    placeholder="Password"
                  />
                </div>
                <div className="BtnSpace">
                  <button
                    onClick={handleFormSubmit}
                    className="loginBtn btn-primary border-2 bg-[#df3e56] border-[#FCFFE7] text-[#FCFFE7] text-lg w-[38%] h-fit p-2 mt-8 mb-8 rounded-xl hover:bg-amber-500"
                    type="login"
                  >
                    Sign in!
                  </button>
                </div>
                <div className="my-6">
                  <p className="text-[#FCFFE7] text-xl mb-4">
                    Not registered yet?
                  </p>
                  <Link
                    className="loginBtn btn-primary border-2 bg-[#df3e56] border-[#FCFFE7] text-[#FCFFE7] text-lg w-[50%] h-fit p-2 rounded-xl hover:bg-teal-600"
                    to="/signup"
                  >
                    Create a new account!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
