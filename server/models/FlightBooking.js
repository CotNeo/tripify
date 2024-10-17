const mongoose = require("mongoose");

const FlightBookingSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: false, // Tek yön uçuşlar için opsiyonel
  },
  passengers: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  cabinClass: {
    type: String,
    enum: ["Economy", "Business", "First Class"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FlightBooking", FlightBookingSchema);
