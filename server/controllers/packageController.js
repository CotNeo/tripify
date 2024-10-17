const Package = require("../models/Package"); // Paket modeli
const logger = require("../config/logger"); // Winston loglama

// Yeni bir seyahat paketi oluşturma fonksiyonu
exports.createPackage = async (req, res, next) => {
  try {
    const { flight, hotel, carRental, totalPrice } = req.body;

    // Yeni paket kaydı oluşturma
    const travelPackage = new Package({
      flight,
      hotel,
      carRental,
      totalPrice,
    });

    await travelPackage.save(); // Veritabanına kaydetme
    logger.info("Seyahat paketi başarıyla oluşturuldu.");
    res.status(201).json(travelPackage); // Başarılı yanıt döndürme
  } catch (error) {
    logger.error("Seyahat paketi oluşturulurken hata oluştu:", error.message);
    res.status(500).json({ message: "Seyahat paketi oluşturulurken bir hata oluştu." });
  }
};

// Tüm seyahat paketlerini listeleyen fonksiyon
exports.getAllPackages = async (req, res, next) => {
  try {
    const packages = await Package.find(); // Veritabanındaki tüm paketleri alır
    res.status(200).json(packages); // Paketleri JSON formatında döndürür
  } catch (error) {
    logger.error("Seyahat paketleri alınırken hata oluştu:", error.message);
    res.status(500).json({ message: "Seyahat paketleri alınırken bir hata oluştu." });
  }
};

// Belirli bir paketi ID'ye göre döndüren fonksiyon
exports.getPackageById = async (req, res, next) => {
  try {
    const packageId = req.params.id;
    const travelPackage = await Package.findById(packageId);

    if (!travelPackage) {
      return res.status(404).json({ message: "Paket bulunamadı." });
    }

    res.status(200).json(travelPackage); // Belirli paketi döndürme
  } catch (error) {
    logger.error("Paket bulunurken hata oluştu:", error.message);
    res.status(500).json({ message: "Paket bulunurken bir hata oluştu." });
  }
};

// Belirli bir paketi ID'ye göre silen fonksiyon
exports.deletePackage = async (req, res, next) => {
  try {
    const packageId = req.params.id;
    const deletedPackage = await Package.findByIdAndDelete(packageId);

    if (!deletedPackage) {
      return res.status(404).json({ message: "Paket bulunamadı." });
    }

    logger.info("Paket başarıyla silindi.");
    res.status(200).json({ message: "Paket başarıyla silindi." });
  } catch (error) {
    logger.error("Paket silinirken hata oluştu:", error.message);
    res.status(500).json({ message: "Paket silinirken bir hata oluştu." });
  }
};
