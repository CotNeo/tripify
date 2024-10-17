const { createLogger, format, transports } = require("winston");

// Log formatını belirleme
const loggerFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

// Logger yapılandırması
const logger = createLogger({
  level: "info", // Varsayılan log seviyesi
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Zaman damgası ekleme
    format.colorize(), // Konsolda renkli gösterim
    loggerFormat // Mesaj formatı
  ),
  transports: [
    // Konsola loglama
    new transports.Console(),
    // Dosyaya loglama
    new transports.File({ filename: "server/logs/app.log" }),
  ],
});

// Logger'ı dışa aktararak uygulama genelinde kullanılmasını sağlama
module.exports = logger;
