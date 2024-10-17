const axios = require("axios");
const CarRental = require("../models/CarRental"); // Araç kiralama modeli
const logger = require("../config/logger"); // Winston loglama
const { CAR_RENTAL_API_KEY, CAR_RENTAL_API_ID } = require("../config/envConfig"); // Çevresel değişkenler

// Araç kiralama verilerini API'den çeken fonksiyon
exports.getCarRentalData = async (req, res, next) => {
  try {
    const { pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, carType } = req.query;

    // Araç kiralama API'sine istek gönderme
    const response = await axios.get("https://carrentalapi.com/cars", {
      params: {
        pickUpLocation,
        dropOffLocation,
        pickUpDate,
        dropOffDate,
        carType,
        api_key: CAR_RENTAL_API_KEY,
        api_id: CAR_RENTAL_API_ID,
      },
    });

    res.status(200).json(response.data); // API yanıtını frontend'e JSON olarak döner
  } catch (error) {
    logger.error("Araç kiralama verisi alınırken hata oluştu:", error.message); // Hata loglama
    res.status(500).json({ message: "Araç kiralama verisi alınırken bir hata oluştu." });
  }
};

// Yeni araç kiralama rezervasyonu kaydetme fonksiyonu
exports.createCarRental = async (req, res, next) => {
  try {
    const { company, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, carType, price } = req.body;

    // Yeni araç kiralama kaydı oluşturma
    const carRental = new CarRental({
      company,
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      carType,
      price,
    });

    await carRental.save(); // Veritabanına kaydetme
    logger.info("Araç kiralama rezervasyonu başarıyla oluşturuldu.");
    res.status(201).json(carRental);
  } catch (error) {
    logger.error("Araç kiralama kaydedilirken hata oluştu:", error.message);
    res.status(500).json({ message: "Araç kiralama kaydedilirken bir hata oluştu." });
  }
};

// Tüm araç kiralama kayıtlarını listeleyen fonksiyon
exports.getAllCarRentals = async (req, res, next) => {
  try {
    const carRentals = await CarRental.find(); // Veritabanındaki tüm araç kiralama kayıtlarını alır
    res.status(200).json(carRentals);
  } catch (error) {
    logger.error("Araç kiralama kayıtları alınırken hata oluştu:", error.message);
    res.status(500).json({ message: "Araç kiralama kayıtları alınırken bir hata oluştu." });
  }
};
