const mongoose = require("mongoose");

const CarRentalSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  pickUpLocation: {
    type: String,
    required: true,
  },
  dropOffLocation: {
    type: String,
    required: true,
  },
  pickUpDate: {
    type: Date,
    required: true,
  },
  dropOffDate: {
    type: Date,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CarRental", CarRentalSchema);
