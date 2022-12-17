import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";

const DonateHere = () => {
  return (
    <div>
      <div className="card bg-red-900 grid grid-cols-2 m-14 rounded-lg">
        <form className="payment-form">
          <div className="select m-10 ">Select Payment Method</div>
          <div className="flex flex-col payment-selection m-10 justify-items-center">
            <button
              type="button"
              className="credit-card border-y-2 border-white  bg-red-100"
            >
              <BsCreditCard />
              Credit Card
            </button>
            <button
              type="button"
              className="bank border-y-0 border-white bg-red-100"
            >
              <BsBank />
              Bank
            </button>
            <button
              type="button"
              className="paypal border-y-2 border-white  bg-red-100"
            >
              <FaPaypal />
              PayPal
            </button>
          </div>
        </form>
        <form className="donate-form">
          <div className="donateForm col-span-2 text-white m-10">
            Donate Form
          </div>
          <div className="flex flex-col">
            <input
              className="input rounded-full p-3"
              type="donation-amount"
              id="donation-amount"
            />
          </div>
          <div className="donateBtns m-16 flex flex-row">
            <div className="rounded-full p-3 bg-white m-5 ">$10</div>
            <div className="rounded-full p-3 bg-white m-5 ">$20</div>
            <div className="rounded-full p-3 bg-white m-5 ">$30</div>
            <div className="rounded-full p-3 bg-white m-5 ">Other</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateHere;
