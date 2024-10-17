import React from "react";
import FlightDataComponent from "../components/FlightDataComponent";
import HotelDataComponent from "../components/HotelDataComponent";
import CarRentalDataComponent from "../components/CarRentalDataComponent";
import PackageCreationForm from "../components/PackageCreationForm";
import PackageList from "../components/PackageList";

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Tripify - Seyahat Planlama</h1>
      <p>Uçak bileti, otel rezervasyonu ve araç kiralama seçeneklerini bir arada bulabileceğiniz seyahat planlama uygulamasına hoş geldiniz!</p>

      {/* Paket Oluşturma Formu */}
      <section style={{ marginTop: "30px" }}>
        <h2>Paket Oluştur</h2>
        <PackageCreationForm />
      </section>

      {/* Paket Listeleme */}
      <section style={{ marginTop: "30px" }}>
        <h2>Oluşturulmuş Paketler</h2>
        <PackageList />
      </section>

      {/* Uçak Bileti Bilgileri */}
      <section style={{ marginTop: "30px" }}>
        <h2>Uçuş Bilgileri</h2>
        <FlightDataComponent />
      </section>

      {/* Otel Bilgileri */}
      <section style={{ marginTop: "30px" }}>
        <h2>Otel Bilgileri</h2>
        <HotelDataComponent />
      </section>

      {/* Araç Kiralama Bilgileri */}
      <section style={{ marginTop: "30px" }}>
        <h2>Araç Kiralama Bilgileri</h2>
        <CarRentalDataComponent />
      </section>
    </div>
  );
};

export default HomePage;
