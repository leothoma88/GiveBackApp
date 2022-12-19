import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { BsFillCreditCardFill } from "react-icons/bs";
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import EveryOrgBtn from "./EveryOrgBtn";




const Payment = ({name, description, coverImageUrl, ein}) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState(0)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAmount(value)
  };

useEffect(() => {
  fetch('/config').then(async (r) => {
      const { publishableKey } = await r.json();

      setStripePromise(loadStripe(publishableKey));
  });  
}, [])

useEffect(() => {
  console.log('cambio', amount)
  if(amount > 0){
    fetch('/create-payment-intent', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({amount: amount}),
    }).then(async (r) => {
        const { clientSecret } = await r.json();
  
        setClientSecret(clientSecret)
    });  

  }

}, [amount])

  return (
    <div className="flex flex-row justify-center w-full h-full bg-[#FCFFE7] text-[#191f3d]">
      <div className="w-full mx-auto text-center p-6">
        <h1 className="text-4xl md:text-4xl sm:text-3xl font-bold p-4">
          Thank you for <span className='text-5xl md:text-5xl sm:text-4xl text-[#df3e56]'>GivingBack</span>!
        </h1>

        <div className="grid grid-cols-2 place-content-center gap-4">
          <div>
            <Cards 
            name={name}
            description={description}
            coverImageUrl={coverImageUrl}
             />
          </div>
          <div>
          <form id="payment">
              <p className="flex flex-row align-middle text-[#191f3d] text-2xl text-left mb-2">
                Donation amount
              </p>
              <input
              onChange={handleInputChange}
                className="block place-content-center form-input form-control bg-[#191f3d] w-full rounded-md h-[35px] text-[#FCFFE7] p-2"
                name="payment"
                id="payment"
                htmlFor="payment"
                placeholder="$ USD"
              ></input>
              </form>
            <>
            {stripePromise && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
              <PaymentElement />
              </Elements>
              )}
              </>
            
          
            {/* <form id="payment">
              <p className="flex flex-row align-middle text-[#191f3d] text-2xl text-left mb-2">
                Donation amount
              </p>
              <input
              onChange={handleInputChange}
                className="block place-content-center form-input form-control bg-[#191f3d] w-full rounded-md h-[35px] text-[#FCFFE7] p-2"
                name="payment"
                id="payment"
                htmlFor="payment"
                placeholder="$ USD"
              ></input>
               */}

              {/* <p className="mt-8 flex flex-row align-middle text-[#191f3d] text-lg text-left mb-2">
                
                <BsFillCreditCardFill /> &nbsp;
                <span className="text-xl">Card Number</span>
              </p>
              <input
                className="block place-content-center form-input form-control bg-[#191f3d] w-full rounded-md h-[35px] text-[#FCFFE7] p-2"
                name="card"
                id="card"
                htmlFor="card"
                placeholder="1234 1234 1234 1234"
              >

              </input>

              <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='grid grid-cols-1'>
                <p className="mt-4 flex flex-row align-middle text-[#191f3d] text-md text-left mb-2 w-1/2">Exp. date</p>
              <input
                className="block place-content-center form-input form-control bg-[#191f3d] w-[90%] rounded-md h-[35px] text-[#FCFFE7] p-2"
                name="exp"
                id="exp"
                htmlFor="exp"
                placeholder="MM/YY">
                </input>
                </div>

                <div className="grid grid-cols-1">
                <p className="mt-4 flex flex-row align-middle text-[#191f3d] text-md text-left mb-2">CVC</p>
              <input
                className="block place-content-center form-input form-control bg-[#191f3d] w-[90%] rounded-md h-[35px] text-[#FCFFE7] p-2"
                name="cvc"
                id="cvc"
                htmlFor="cvc"
                placeholder="123">

              </input>
                    
                </div>
              </div> */} 
            {/* </form> */}
          </div>
          <EveryOrgBtn onClickBtn={() => {
            window.open(`https://www.every.org/${ein}#donate?amount`)
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Payment;
