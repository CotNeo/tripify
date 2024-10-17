import React, { useState } from "react";
import axios from "axios";

const FlightDataComponent = () => {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Uçuş verilerini backend'den çekmek için fonksiyon
  const fetchFlightData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Backend'e istek gönderiyoruz
      const response = await axios.get("http://localhost:5000/api/flights/data", {
        params: {
          departure: "IST",           // Örnek kalkış noktası
          arrival: "JFK",             // Örnek varış noktası
          date: "2024-01-01",         // Örnek uçuş tarihi
          apiKey: "your_flight_api_key" // API anahtarı
        }
      });
      setFlightData(response.data); // Gelen veriyi flightData state'ine kaydediyoruz
    } catch (err) {
      setError("Uçuş bilgileri alınırken bir hata oluştu.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Uçuş Bilgileri</h2>
      <button onClick={fetchFlightData}>Uçuşları Getir</button>

      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}

      <ul>
        {flightData.map((flight, index) => (
          <li key={index}>
            <p>Havayolu: {flight.airline}</p>
            <p>Fiyat: {flight.price}</p>
            <p>Kalkış Saati: {flight.departureTime}</p>
            <p>Varış Saati: {flight.arrivalTime}</p>
            <p>Süre: {flight.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightDataComponent;
