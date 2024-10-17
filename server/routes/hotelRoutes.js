const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");
const apiAuth = require("../middleware/apiAuth");

// Uçuş verilerini almak için rota (API üzerinden çekilir)
router.get("/data", apiAuth, flightController.getFlightData);

// Yeni uçuş rezervasyonu oluşturmak için rota
router.post("/", apiAuth, flightController.createFlightBooking);

// Tüm uçuş rezervasyonlarını listelemek için rota
router.get("/", apiAuth, flightController.getAllFlightBookings);

module.exports = router;
