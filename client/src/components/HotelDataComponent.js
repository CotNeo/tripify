import React, { useState } from "react";
import axios from "axios";

const HotelDataComponent = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Otel verilerini backend'den çekmek için fonksiyon
  const fetchHotelData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Backend'e istek gönderiyoruz
      const response = await axios.get("http://localhost:5000/api/hotels/data", {
        params: {
          location: "Paris",          // Örnek konum
          checkIn: "2024-01-01",      // Giriş tarihi
          checkOut: "2024-01-05",     // Çıkış tarihi
          apiKey: "your_hotel_api_key" // API anahtarı
        }
      });
      setHotelData(response.data); // Gelen veriyi hotelData state'ine kaydediyoruz
    } catch (err) {
      setError("Otel bilgileri alınırken bir hata oluştu.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Otel Bilgileri</h2>
      <button onClick={fetchHotelData}>Otelleri Getir</button>

      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}

      <ul>
        {hotelData.map((hotel, index) => (
          <li key={index}>
            <p>Otel Adı: {hotel.name}</p>
            <p>Konum: {hotel.location}</p>
            <p>Fiyat: {hotel.price}</p>
            <p>Yıldız: {hotel.stars}</p>
            <p>Otel Değerlendirmesi: {hotel.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelDataComponent;
