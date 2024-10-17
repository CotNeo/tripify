const dotenv = require("dotenv");
const logger = require("./logger");

dotenv.config(); // .env dosyasındaki çevresel değişkenleri yükler

// Gerekli çevresel değişkenlerin bir listesi
const requiredEnvVariables = [
  "MONGO_URI",
  "PORT",
  "FLIGHT_API_KEY",
  "FLIGHT_API_ID",
  "HOTEL_API_KEY",
  "HOTEL_API_ID",
  "CAR_RENTAL_API_KEY",
  "CAR_RENTAL_API_ID",
];

// Gerekli tüm çevresel değişkenlerin mevcut olup olmadığını kontrol eder
requiredEnvVariables.forEach((variable) => {
  if (!process.env[variable]) {
    logger.error(`Environment variable ${variable} is missing!`);
    process.exit(1); // Eksik bir değişken varsa süreci durdurur
  }
});

// Çevresel değişkenleri uygulama içinde kullanılmak üzere dışa aktarır
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  FLIGHT_API_KEY: process.env.FLIGHT_API_KEY,
  FLIGHT_API_ID: process.env.FLIGHT_API_ID,
  HOTEL_API_KEY: process.env.HOTEL_API_KEY,
  HOTEL_API_ID: process.env.HOTEL_API_ID,
  CAR_RENTAL_API_KEY: process.env.CAR_RENTAL_API_KEY,
  CAR_RENTAL_API_ID: process.env.CAR_RENTAL_API_ID,
};
