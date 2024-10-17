const express = require("express");
const router = express.Router();
const packageController = require("../controllers/packageController");
const apiAuth = require("../middleware/apiAuth");

// Yeni bir seyahat paketi oluşturmak için rota
router.post("/", apiAuth, packageController.createPackage);

// Tüm seyahat paketlerini listelemek için rota
router.get("/", apiAuth, packageController.getAllPackages);

// Belirli bir paketi ID'ye göre almak için rota
router.get("/:id", apiAuth, packageController.getPackageById);

// Belirli bir paketi ID'ye göre silmek için rota
router.delete("/:id", apiAuth, packageController.deletePackage);

module.exports = router;
