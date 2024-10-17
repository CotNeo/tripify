const { API_KEY } = require("../config/envConfig"); // Çevresel değişkenlerden API_KEY alıyoruz

// API yetkilendirme middleware'i
const apiAuth = (req, res, next) => {
  const clientApiKey = req.headers["x-api-key"]; // İstek başlığından API anahtarını alıyoruz

  // API anahtarı kontrolü
  if (!clientApiKey || clientApiKey !== API_KEY) {
    return res.status(403).json({ message: "Erişim reddedildi. Geçersiz API anahtarı." });
  }

  next(); // Geçerli API anahtarı varsa sonraki middleware veya route'a geç
};

module.exports = apiAuth;
