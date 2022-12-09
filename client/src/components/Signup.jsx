import React from "react";

const Signup = () => {
  return (
    <div>
      <h1 className="signup text-3xl font-bold">Signup Here:</h1>
      <div className="flex ml-20 place-content-center">
        <div className="flex p-5">
          <div className="start bg-red-400 w-4/5 border-bg-black rounded-2xl">
            <div className="card p-8 m-5 border-2 bg-red-300 rounded-2xl">
              <form className="form login-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name:
                  </label>
                  <input
                    className="form-input form-control"
                    type="text"
                    id="fullName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email:</label>
                  <input
                    className="form-input form-control"
                    type="password"
                    id="emailInput"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="messageDesc">Message:</label>
                  <input
                    className="form-input form-control"
                    type="password"
                    id="messageDesc"
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
