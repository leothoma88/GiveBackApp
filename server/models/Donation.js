const { Schema, model } = require("mongoose");

const donationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  charityId: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
  },
  link: {
    type: String,
  },
  ein: {
    type: String,
  },
});

//const Donation = model('Donation', donationSchema);

module.exports = donationSchema;
