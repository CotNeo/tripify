import React, { useState, useEffect } from "react";
import axios from "axios";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Paket verilerini backend'den çekmek için fonksiyon
  const fetchPackages = async () => {
    setLoading(true);
    setError(null);
    try {
      // Backend'e GET isteği gönderiyoruz
      const response = await axios.get("http://localhost:5000/api/packages");
      setPackages(response.data); // Gelen veriyi packages state'ine kaydediyoruz
    } catch (err) {
      setError("Paketler alınırken bir hata oluştu.");
    }
    setLoading(false);
  };

  // Sayfa yüklendiğinde paketleri çekmek için useEffect kullanıyoruz
  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div>
      <h2>Oluşturulmuş Paketler</h2>

      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}

      <ul>
        {packages.map((pkg, index) => (
          <li key={index} style={{ marginBottom: "20px", border: "1px solid #ddd", padding: "10px" }}>
            <h3>Paket {index + 1}</h3>
            <h4>Uçuş Bilgileri</h4>
            <p>Kalkış: {pkg.flight.departureAirport}</p>
            <p>Varış: {pkg.flight.arrivalAirport}</p>
            <p>Gidiş Tarihi: {pkg.flight.departureDate}</p>
            <p>Dönüş Tarihi: {pkg.flight.returnDate}</p>
            <p>Yolcu Sayısı: {pkg.flight.passengers}</p>

            <h4>Otel Bilgileri</h4>
            <p>Otel Adı: {pkg.hotel.name}</p>
            <p>Konum: {pkg.hotel.location}</p>
            <p>Giriş Tarihi: {pkg.hotel.checkInDate}</p>
            <p>Çıkış Tarihi: {pkg.hotel.checkOutDate}</p>
            <p>Misafir Sayısı: {pkg.hotel.guests}</p>

            <h4>Araç Kiralama Bilgileri</h4>
            <p>Şirket: {pkg.carRental.company}</p>
            <p>Teslim Alma Yeri: {pkg.carRental.pickUpLocation}</p>
            <p>Teslim Etme Yeri: {pkg.carRental.dropOffLocation}</p>
            <p>Alma Tarihi: {pkg.carRental.pickUpDate}</p>
            <p>İade Tarihi: {pkg.carRental.dropOffDate}</p>
            <p>Araç Tipi: {pkg.carRental.carType}</p>

            <h4>Toplam Fiyat</h4>
            <p>{pkg.totalPrice} TL</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageList;
