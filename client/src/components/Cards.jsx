// import photo from "../assets/charity-photo-test.avif";
import { DonateBtn } from "./DonateBtn";
import React, {useState} from "react";
import { useQuery, useMutation} from "@apollo/client";
import { QUERY_SEARCH } from '../utils/queries';
import { SAVE_DONATION, REMOVE_DONATION } from "../utils/mutations";
// import  { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import  { Modal, Box, Typography, Button } from "@mui/material";
import baseCard from '../assets/basecard.jpg';

// class Cards extends Component {
function Cards ({name, description, coverImageUrl}) {
  // const { name,description,coverImageUrl } = this.props;
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {setShowModal(false)}
  const {loading, data} = useQuery (QUERY_SEARCH);
  const [saveDonation, {error}] = useMutation (SAVE_DONATION);
  const [removeDonation, {err}] = useMutation (REMOVE_DONATION);
  const donationData = data?.search || {};

// Create a function that handle savedonatio to return the data, and one for removing the donation
  // const handleSaveDonation = async (name) => {
  //   if(!name) {return}
  //   try {
    // h-96 rounded-md  border-slate-400 px-9 py-10 bg-white
  //   } 
  // }
  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg ">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover transition  hover:-translate-y-1 hover:scale-110"
            src={coverImageUrl || baseCard }
            alt=""
          />
        </div>

        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2 text-white">{name}</p>
          <p className="text-gray-300 text-base">
            {description}
          </p>
        </div>
        <DonateBtn onClickBtn={() => {setShowModal(true);}}/>
        <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className= 'absolute w-[60%] md:max-h-screen md:max-w-xl bg-amber-100 rounded-lg p-6  mt-10 ml-12'>
        <img className="w-[85%] ml-[7%] mr-[10%] rounded-lg" src={coverImageUrl} alt="" />
        <br />
        <Typography id="modal-modal-title" variant="h4" component="h2" className=" text-black">
          {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
          </Typography>
          <Button className="inline-block bg-pink-500 rounded-full px-5 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-teal-400" onClick={handleClose}>Cancel</Button>
          <Button className="inline-block bg-pink-500 rounded-full px-5 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-teal-400" onClick={handleClose}>Donate</Button>
        </Box>
        </Modal>

      </div>    
    </>
  );
}


export default Cards;
