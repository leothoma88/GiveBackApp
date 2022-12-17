import React from "react";
import Cards from "./Cards";
import CharitiesBuilder from "./CharitiesBuilder";
// import Search from './Search'

import { useState } from "react";


const Home = () => {
  const [charitiesToShow, setCharitiesToShow] = useState();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    fetch("http://localhost:3000/send", {
      method: "POST",
      body: JSON.stringify({ email, subject, message }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          resetForm();
          alert("Message Sent.");
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };

  const resetForm = () => {
    setSubject("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <main>
        <div className="flex">
          <p className="text-white text-xl mt-[50px] font-bold text-center flex-1">
            Organizations
          </p>
        </div>
        <div className="flex" alt="middlesections">
          <div className="drop-shadow-lg flex-auto mt-20 m-[50px]  ">
            <CharitiesBuilder setCharitiesToShow={setCharitiesToShow} />
            {charitiesToShow?.map((charity) => {
              return (
                <Cards
                  name={charity["name"]}
                  key={charity["name"]}
                  description={charity["description"]}
                  coverImageUrl={charity["coverImageUrl"]}
                />
              );
            })}
          </div>
        </div>
        <section className="bg-gray-900 ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
              If you have any questions or would like your organization
              featured.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <input
                  value={email}
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  value={subject}
                  name="subject"
                  type="text"
                  onChange={handleInputChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Your message
                </label>
                <input
                  value={message}
                  name="message"
                  type="message"
                  onChange={handleInputChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></input>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-slate-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none  bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                onClick={handleFormSubmit}
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
