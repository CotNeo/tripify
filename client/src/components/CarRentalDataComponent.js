import React, { useState } from "react";
import axios from "axios";

const CarRentalDataComponent = () => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Araç kiralama verilerini backend'den çekmek için fonksiyon
  const fetchCarData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Backend'e istek gönderiyoruz
      const response = await axios.get("http://localhost:5000/api/cars/data", {
        params: {
          pickUpLocation: "LAX",     // Örnek teslim yeri
          dropOffLocation: "SFO",    // Örnek bırakma yeri
          pickUpDate: "2024-01-01",  // Teslim alma tarihi
          dropOffDate: "2024-01-05", // Bırakma tarihi
          apiKey: "your_car_rental_api_key" // API anahtarı
        }
      });
      setCarData(response.data); // Gelen veriyi carData state'ine kaydediyoruz
    } catch (err) {
      setError("Araç kiralama bilgileri alınırken bir hata oluştu.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Araç Kiralama Bilgileri</h2>
      <button onClick={fetchCarData}>Araçları Getir</button>

      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}

      <ul>
        {carData.map((car, index) => (
          <li key={index}>
            <p>Şirket: {car.company}</p>
            <p>Fiyat: {car.price}</p>
            <p>Araç Tipi: {car.carType}</p>
            <p>Pick-Up: {car.pickUpLocation}</p>
            <p>Drop-Off: {car.dropOffLocation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarRentalDataComponent;
