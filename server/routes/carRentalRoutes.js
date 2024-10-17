const express = require("express");
const router = express.Router();
const carRentalController = require("../controllers/carRentalController");
const apiAuth = require("../middleware/apiAuth");

// Araç kiralama verilerini almak için rota (API üzerinden çekilir)
router.get("/data", apiAuth, carRentalController.getCarRentalData);

// Yeni araç kiralama rezervasyonu oluşturmak için rota
router.post("/", apiAuth, carRentalController.createCarRental);

// Tüm araç kiralama rezervasyonlarını listelemek için rota
router.get("/", apiAuth, carRentalController.getAllCarRentals);

module.exports = router;
