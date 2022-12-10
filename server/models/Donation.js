const { Schema } = require("mongoose");

const donationSchema = new Schema({
  charityName: {
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
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = donationSchema;
