import React, { useState } from "react";
import axios from "axios";

const PackageCreationForm = () => {
  const [flight, setFlight] = useState({});
  const [hotel, setHotel] = useState({});
  const [carRental, setCarRental] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState("");

  // Formu göndererek paket oluşturma işlemini başlatan fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      // Backend'e POST isteği gönderiyoruz
      const response = await axios.post("http://localhost:5000/api/packages", {
        flight,
        hotel,
        carRental,
        totalPrice,
      });
      setMessage("Paket başarıyla oluşturuldu!");
      console.log("Paket oluşturuldu:", response.data);
    } catch (error) {
      setMessage("Paket oluşturulurken hata oluştu.");
      console.error("Paket oluşturma hatası:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Paket Oluştur</h2>

      {/* Uçuş Bilgileri */}
      <h3>Uçuş Bilgileri</h3>
      <input
        type="text"
        placeholder="Kalkış Havalimanı"
        onChange={(e) => setFlight({ ...flight, departureAirport: e.target.value })}
      />
      <input
        type="text"
        placeholder="Varış Havalimanı"
        onChange={(e) => setFlight({ ...flight, arrivalAirport: e.target.value })}
      />
      <input
        type="date"
        placeholder="Gidiş Tarihi"
        onChange={(e) => setFlight({ ...flight, departureDate: e.target.value })}
      />
      <input
        type="date"
        placeholder="Dönüş Tarihi"
        onChange={(e) => setFlight({ ...flight, returnDate: e.target.value })}
      />
      <input
        type="number"
        placeholder="Yolcu Sayısı"
        onChange={(e) => setFlight({ ...flight, passengers: Number(e.target.value) })}
      />

      {/* Otel Bilgileri */}
      <h3>Otel Bilgileri</h3>
      <input
        type="text"
        placeholder="Otel Adı"
        onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Konum"
        onChange={(e) => setHotel({ ...hotel, location: e.target.value })}
      />
      <input
        type="date"
        placeholder="Giriş Tarihi"
        onChange={(e) => setHotel({ ...hotel, checkInDate: e.target.value })}
      />
      <input
        type="date"
        placeholder="Çıkış Tarihi"
        onChange={(e) => setHotel({ ...hotel, checkOutDate: e.target.value })}
      />
      <input
        type="number"
        placeholder="Misafir Sayısı"
        onChange={(e) => setHotel({ ...hotel, guests: Number(e.target.value) })}
      />

      {/* Araç Kiralama Bilgileri */}
      <h3>Araç Kiralama Bilgileri</h3>
      <input
        type="text"
        placeholder="Şirket Adı"
        onChange={(e) => setCarRental({ ...carRental, company: e.target.value })}
      />
      <input
        type="text"
        placeholder="Teslim Alma Yeri"
        onChange={(e) => setCarRental({ ...carRental, pickUpLocation: e.target.value })}
      />
      <input
        type="text"
        placeholder="Teslim Etme Yeri"
        onChange={(e) => setCarRental({ ...carRental, dropOffLocation: e.target.value })}
      />
      <input
        type="date"
        placeholder="Teslim Alma Tarihi"
        onChange={(e) => setCarRental({ ...carRental, pickUpDate: e.target.value })}
      />
      <input
        type="date"
        placeholder="Teslim Etme Tarihi"
        onChange={(e) => setCarRental({ ...carRental, dropOffDate: e.target.value })}
      />
      <input
        type="text"
        placeholder="Araç Tipi"
        onChange={(e) => setCarRental({ ...carRental, carType: e.target.value })}
      />

      {/* Toplam Fiyat */}
      <h3>Toplam Fiyat</h3>
      <input
        type="number"
        placeholder="Toplam Fiyat"
        onChange={(e) => setTotalPrice(Number(e.target.value))}
      />

      <button type="submit">Paket Oluştur</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default PackageCreationForm;
