import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <div className="flex flex-col justify-center w-full h-full bg-[#df3e56]">
        <div className="w-full mx-auto text-center text-[#FCFFE7] bg-[#df3e56] pt-12">
      <h1 className="text-5xl md:text-5xl sm:text-4xl font-bold p-6">Create New Account</h1>
      <div className="flex flex-row place-content-center mb-12">
        <div className="flex p-5">
        <div className="p-8 m-5 border-2 bg-[#191f3d] border-[#191f3d] rounded-2xl w-[20rem] sm:w-[20rem] md:w-[40rem] lg:w-[40rem]">
              <form className="form login-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label text-[#FCFFE7] text-lg" htmlFor="userName">
                    Username:
                  </label>
                  <input
                    className="block w-full form-input form-control text-[#191f3d]"
                    placeholder="Full Name"
                    name="username"
                    type="username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-[#FCFFE7] text-lg" htmlFor="emailInput">Email:</label>
                  <input
                    className="block w-full form-input form-control text-[#191f3d]"
                    placeholder="yourEmail@here.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-[#FCFFE7] text-lg" htmlFor="password">Password:</label>
                  <input
                    className="block w-full form-input form-control text-[#191f3d]"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="BtnSpace">
                  <button
                    className="submitBtn btn-primary border-2 bg-[#df3e56] border-[#FCFFE7] text-[#FCFFE7] text-lg w-[50%] h-fit p-2 mt-8 rounded-xl hover:bg-teal-600"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
