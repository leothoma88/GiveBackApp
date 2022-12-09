const { Schema } = require("mongoose");

const donationSchema = new Schema({
  charity: [
    {
      type: String,
    },
  ],
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
  charityName: {
    type: String,
    required: true,
  },
});

module.exports = donationSchema;
