const express = require("express");
const connectDB = require("./config/db"); // Veritabanı bağlantısı
const logger = require("./config/logger"); // Winston loglama
const errorHandler = require("./middleware/errorHandler"); // Hata yönetimi middleware'i
const carRentalRoutes = require("./routes/carRentalRoutes"); // Araç kiralama rotaları
const flightRoutes = require("./routes/flightRoutes"); // Uçuş rotaları
const packageRoutes = require("./routes/packageRoutes"); // Paket rotaları
const hotelRoutes = require("./routes/hotelRoutes"); // Otel rotaları
const { PORT } = require("./config/envConfig"); // Çevresel değişkenlerden PORT

// Express uygulaması oluşturma
const app = express();

// Middleware'ler
app.use(express.json()); // JSON gövdeli istekleri işlemek için

// API rotalarını tanımlama
app.use("/api/cars", carRentalRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/hotels", hotelRoutes);

// Hata yönetimi middleware'i
app.use(errorHandler);

// Veritabanına bağlanma ve sunucuyu başlatma
const startServer = async () => {
  try {
    await connectDB(); // Veritabanı bağlantısını kur
    app.listen(PORT, () => {
      logger.info(`Sunucu ${PORT} portunda çalışıyor`);
    });
  } catch (error) {
    logger.error("Sunucu başlatılırken hata oluştu:", error.message);
    process.exit(1); // Hata durumunda süreci sonlandır
  }
};

startServer();
