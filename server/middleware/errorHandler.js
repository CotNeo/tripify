const logger = require("../config/logger"); // Winston loglama

// Genel hata yönetimi middleware'i
const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500; // Varsayılan olarak 500 durum kodu
  const message = err.message || "Sunucu hatası"; // Varsayılan hata mesajı

  // Hata mesajını loglama
  logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // Hata yanıtını JSON formatında döndürme
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = errorHandler;
