const mongoose = require("mongoose");
const logger = require("./logger"); // Winston loglamasını kullanmak için

const { MONGO_URI } = require("./envConfig"); // Çevresel değişkenlerden MONGO_URI'yi alıyoruz

// MongoDB bağlantısını kuran fonksiyon
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("MongoDB bağlantısı başarılı."); // Bağlantı başarılı olursa loglama
  } catch (error) {
    logger.error("MongoDB bağlantısı başarısız:", error.message); // Hata olursa loglama
    process.exit(1); // Hata durumunda süreci sonlandır
  }
};

module.exports = connectDB;
