const axios = require("axios");
const FlightBooking = require("../models/FlightBooking"); // Uçuş rezervasyonu modeli
const logger = require("../config/logger"); // Winston loglama
const { FLIGHT_API_KEY, FLIGHT_API_ID } = require("../config/envConfig"); // Çevresel değişkenler

// Uçuş verilerini API'den çeken fonksiyon
exports.getFlightData = async (req, res, next) => {
  try {
    const { departure, arrival, date, passengers, cabinClass } = req.query;

    // Uçuş API'sine istek gönderme
    const response = await axios.get("https://flightapi.com/flights", {
      params: {
        departure,
        arrival,
        date,
        passengers,
        cabinClass,
        api_key: FLIGHT_API_KEY,
        api_id: FLIGHT_API_ID,
      },
    });

    res.status(200).json(response.data); // API yanıtını frontend'e JSON olarak döner
  } catch (error) {
    logger.error("Uçuş verisi alınırken hata oluştu:", error.message); // Hata loglama
    res.status(500).json({ message: "Uçuş verisi alınırken bir hata oluştu." });
  }
};

// Yeni uçuş rezervasyonu kaydetme fonksiyonu
exports.createFlightBooking = async (req, res, next) => {
  try {
    const { airline, departure, arrival, departureDate, returnDate, passengers, price, cabinClass } = req.body;

    // Yeni uçuş rezervasyonu kaydı oluşturma
    const flightBooking = new FlightBooking({
      airline,
      departure,
      arrival,
      departureDate,
      returnDate,
      passengers,
      price,
      cabinClass,
    });

    await flightBooking.save(); // Veritabanına kaydetme
    logger.info("Uçuş rezervasyonu başarıyla oluşturuldu.");
    res.status(201).json(flightBooking);
  } catch (error) {
    logger.error("Uçuş rezervasyonu kaydedilirken hata oluştu:", error.message);
    res.status(500).json({ message: "Uçuş rezervasyonu kaydedilirken bir hata oluştu." });
  }
};

// Tüm uçuş rezervasyonlarını listeleyen fonksiyon
exports.getAllFlightBookings = async (req, res, next) => {
  try {
    const flightBookings = await FlightBooking.find(); // Veritabanındaki tüm uçuş rezervasyonlarını alır
    res.status(200).json(flightBookings);
  } catch (error) {
    logger.error("Uçuş rezervasyonları alınırken hata oluştu:", error.message);
    res.status(500).json({ message: "Uçuş rezervasyonları alınırken bir hata oluştu." });
  }
};
