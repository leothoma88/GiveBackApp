// import photo from "../assets/charity-photo-test.avif";
import { DonateBtn } from "./DonateBtn";
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SEARCH, QUERY_ME } from "../utils/queries";
import { SAVE_DONATION, REMOVE_DONATION } from "../utils/mutations";
import { useEffect } from "react";
import Payment from "./Payment";
import SaveBtn from "./SaveBtn";


// import  { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";

import { Modal, Box, Typography, Button } from "@mui/material";


// class Cards extends Component {
function Cards({ name, description, coverImageUrl, ein, charityId }) {

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://assets.every.org/dist/donate-button/0.3/index.js";
  //   script.
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  
  // const { name,description,coverImageUrl } = this.props;
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const { loading, data } = useQuery(QUERY_SEARCH);
  const [saveDonation, { error }] = useMutation(SAVE_DONATION);
  const [removeDonation, { err }] = useMutation(REMOVE_DONATION);
  const donationData = data?.search || {};
  const { loading: loadingSavedDonations, data: savedDonations } = useQuery(QUERY_ME);


  const handleSave = async () => {
    const inp = { name, description, coverImageUrl, ein };
    let alreadyAdded = false;
    let idExisted = '';
    console.log('super',ein)
    savedDonations?.me?.savedDonations?.map((donation) => {
      //console.log('loki', donation)
      if(donation.name == inp.name){
        alreadyAdded = true
        idExisted = donation.ein
      }
    })
    if(!alreadyAdded){
      const { data } = await saveDonation({
        variables: { data: inp },
      });

    }
    else{
      const { data } = await removeDonation({ variables: { ein: idExisted }})
    }


    console.log(data);
  };

  // Create a function that handle savedonatio to return the data, and one for removing the donation
  // const handleSaveDonation = async (name) => {
  //   if(!name) {return}
  //   try {

  //   }

  // }
  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg bg-[#FCFFE7]">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover transition  hover:-translate-y-1 hover:scale-110"
            src={coverImageUrl}
            alt=""
          />
        </div>

        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2 text-[#191f3d]">{name}</p>
          <p className="text-[#191f3d] text-base">{description}</p>
        </div>
        {ein && (
          <div className="grid grid-cols-2">
          <DonateBtn
          onClickBtn={() => {
            setShowModal(true);
          }}
          ein={ein}
        />
        <SaveBtn onClickBtn={handleSave} />
          </div>
        )}
        <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute w-[65%] md:max-h-screen bg-amber-100 rounded-lg p-8 mt-12 ml-14">
            {/* <img
              className="w-[85%] ml-[7%] mr-[10%] rounded-lg"
              src={coverImageUrl}
              alt=""
            />
            <br />
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              className=" text-black"
            >
              {name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {description}
            </Typography>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Donate</Button>
            <Button onClick={handleSave}>Save</Button> */}

            <Payment 
            name={name}
            description={description}
            coverImageUrl={coverImageUrl}
            ein={ein}></Payment>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Cards;
