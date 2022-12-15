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
    <div>
      <h1 className="signup text-3xl font-bold">Signup Here:</h1>
      <div className="flex ml-20 place-content-center">
        <div className="flex p-5">
          <div className="start bg-red-400 w-4/5 border-bg-black rounded-2xl">
            <div className="card p-8 m-5 border-2 bg-red-300 rounded-2xl">
              <form className="form login-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="userName">
                    Username:
                  </label>
                  <input
                    className="block w-full form-input form-control"
                    placeholder="Full Name"
                    name="username"
                    type="username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email:</label>
                  <input
                    className="block w-full form-input form-control"
                    placeholder="yourEmail@here.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    className="block w-full form-input form-control"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="BtnSpace">
                  <button
                    className="submitBtn btn-primary border-2 bg-white p-3 m-5 rounded-2xl hover:bg-amber-500"
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
