const axios = require("axios");
const Hotel = require("../models/Hotel"); // Otel modeli
const logger = require("../config/logger"); // Winston loglama
const { HOTEL_API_KEY, HOTEL_API_ID } = require("../config/envConfig"); // Çevresel değişkenler

// Otel verilerini API'den çeken fonksiyon
exports.getHotelData = async (req, res, next) => {
  try {
    const { location, checkIn, checkOut, guests, roomType } = req.query;

    // Otel API'sine istek gönderme
    const response = await axios.get("https://hotelapi.com/hotels", {
      params: {
        location,
        checkIn,
        checkOut,
        guests,
        roomType,
        api_key: HOTEL_API_KEY,
        api_id: HOTEL_API_ID,
      },
    });

    res.status(200).json(response.data); // API yanıtını frontend'e JSON olarak döner
  } catch (error) {
    logger.error("Otel verisi alınırken hata oluştu:", error.message); // Hata loglama
    res.status(500).json({ message: "Otel verisi alınırken bir hata oluştu." });
  }
};

// Yeni otel rezervasyonu kaydetme fonksiyonu
exports.createHotelBooking = async (req, res, next) => {
  try {
    const { name, location, checkInDate, checkOutDate, guests, price, roomType } = req.body;

    // Yeni otel rezervasyonu kaydı oluşturma
    const hotelBooking = new Hotel({
      name,
      location,
      checkInDate,
      checkOutDate,
      guests,
      price,
      roomType,
    });

    await hotelBooking.save(); // Veritabanına kaydetme
    logger.info("Otel rezervasyonu başarıyla oluşturuldu.");
    res.status(201).json(hotelBooking);
  } catch (error) {
    logger.error("Otel rezervasyonu kaydedilirken hata oluştu:", error.message);
    res.status(500).json({ message: "Otel rezervasyonu kaydedilirken bir hata oluştu." });
  }
};

// Tüm otel rezervasyonlarını listeleyen fonksiyon
exports.getAllHotelBookings = async (req, res, next) => {
  try {
    const hotelBookings = await Hotel.find(); // Veritabanındaki tüm otel rezervasyonlarını alır
    res.status(200).json(hotelBookings);
  } catch (error) {
    logger.error("Otel rezervasyonları alınırken hata oluştu:", error.message);
    res.status(500).json({ message: "Otel rezervasyonları alınırken bir hata oluştu." });
  }
};
