const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  flight: {
    departureAirport: { type: String, required: true },
    arrivalAirport: { type: String, required: true },
    departureDate: { type: Date, required: true },
    returnDate: { type: Date, required: false },
    passengers: { type: Number, required: true, min: 1 },
    airline: { type: String, required: true },
    cabinClass: { type: String, required: true },
    price: { type: Number, required: true },
  },
  hotel: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true, min: 1 },
    roomType: { type: String, required: true },
    price: { type: Number, required: true },
  },
  carRental: {
    company: { type: String, required: true },
    pickUpLocation: { type: String, required: true },
    dropOffLocation: { type: String, required: true },
    pickUpDate: { type: Date, required: true },
    dropOffDate: { type: Date, required: true },
    carType: { type: String, required: true },
    price: { type: Number, required: true },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Package", PackageSchema);
