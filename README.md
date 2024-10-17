# Tripify - Travel Planning Application / Seyahat Planlama Uygulaması

Tripify is a travel planning application that allows users to plan flights, hotels, and car rental options together and create travel packages. The application offers users the opportunity to list suitable travel options and combine these options into travel packages.

Tripify, kullanıcıların uçuş, otel ve araç kiralama seçeneklerini bir arada planlayabileceği, seyahat paketleri oluşturabileceği bir seyahat planlama uygulamasıdır. Uygulama, kullanıcılara uygun seyahat seçeneklerini listeleme ve bu seçenekleri birleştirerek seyahat paketleri oluşturma imkânı sunar.

---

## Contents / İçindekiler

- [Technologies Used / Kullanılan Teknolojiler](#technologies-used--kullanılan-teknolojiler)
- [Setup / Kurulum](#setup--kurulum)
- [Usage / Kullanım](#usage--kullanım)
- [API Endpoints / API Uç Noktaları](#api-endpoints--api-uç-noktaları)
- [Project Structure / Proje Yapısı](#project-structure--proje-yapısı)
- [Development / Geliştirme](#development--geliştirme)
- [Contribution / Katkı](#contribution--katkı)

---

## Technologies Used / Kullanılan Teknolojiler

- **Node.js** and **Express.js** - For backend and API / Backend ve API için
- **MongoDB** and **Mongoose** - For database and ODM / Veritabanı ve ODM için
- **React** - For frontend (can be added later) / Frontend için (ileride eklenebilir)
- **Axios** - For sending API requests / API isteklerini göndermek için
- **Winston** - For logging / Loglama için
- **dotenv** - For managing environment variables / Çevresel değişkenleri yönetmek için

---

## Setup / Kurulum

To run the project locally, follow the steps below:

Projeyi yerel ortamda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Clone this repository / Bu repoyu klonlayın:

   ```bash
   git clone https://github.com/username/tripify.git
   ```

2. Go to the project directory / Proje dizinine gidin:

   ```bash
   cd tripify
   ```

3. Install dependencies / Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. Create a **.env** file and add your environment variables / Bir **.env** dosyası oluşturun ve çevresel değişkenlerinizi ekleyin:

   ```
   MONGO_URI=mongodb://localhost:27017/tripify
   PORT=5000
   FLIGHT_API_KEY=your_flight_api_key
   FLIGHT_API_ID=your_flight_api_id
   HOTEL_API_KEY=your_hotel_api_key
   HOTEL_API_ID=your_hotel_api_id
   CAR_RENTAL_API_KEY=your_car_rental_api_key
   CAR_RENTAL_API_ID=your_car_rental_api_id
   API_KEY=your_application_api_key
   ```

5. Start the application in development mode / Uygulamayı geliştirme modunda başlatın:

   ```bash
   npm run dev
   ```

---

## Usage / Kullanım

The application can be used for travel planning and package creation. Users can enter flight, hotel, and car rental information to create their travel packages.

Uygulama, seyahat planlama ve paket oluşturma için kullanılabilir. Kullanıcılar uçak bileti, otel rezervasyonu ve araç kiralama bilgilerini girerek seyahat paketlerini oluşturabilirler.

---

## API Endpoints / API Uç Noktaları

- **/api/cars**: Car rental operations / Araç kiralama işlemleri.
  - **GET /data**: To get car rental data / Araç kiralama verilerini almak için.
  - **POST /**: To create a new car rental reservation / Yeni araç kiralama rezervasyonu oluşturmak için.
  - **GET /**: To list all car rental reservations / Tüm araç kiralama rezervasyonlarını listelemek için.

- **/api/flights**: Flight operations / Uçuş işlemleri.
  - **GET /data**: To get flight data / Uçuş verilerini almak için.
  - **POST /**: To create a new flight reservation / Yeni uçuş rezervasyonu oluşturmak için.
  - **GET /**: To list all flight reservations / Tüm uçuş rezervasyonlarını listelemek için.

- **/api/packages**: Travel package operations / Seyahat paketi işlemleri.
  - **POST /**: To create a new travel package / Yeni bir seyahat paketi oluşturmak için.
  - **GET /**: To list all travel packages / Tüm seyahat paketlerini listelemek için.
  - **GET /:id**: To get a specific package by ID / Belirli bir paketi ID'ye göre almak için.
  - **DELETE /:id**: To delete a specific package by ID / Belirli bir paketi ID'ye göre silmek için.

- **/api/hotels**: Hotel operations / Otel işlemleri.
  - **GET /data**: To get hotel data / Otel verilerini almak için.
  - **POST /**: To create a new hotel reservation / Yeni otel rezervasyonu oluşturmak için.
  - **GET /**: To list all hotel reservations / Tüm otel rezervasyonlarını listelemek için.

---

## Project Structure / Proje Yapısı

Project directory structure:

Proje dizini yapısı:

```
tripify/
  |-- config/
      |-- db.js
      |-- envConfig.js
      |-- logger.js
  |-- controllers/
      |-- carRentalController.js
      |-- flightController.js
      |-- hotelController.js
      |-- packageController.js
  |-- middleware/
      |-- apiAuth.js
      |-- errorHandler.js
  |-- models/
      |-- CarRental.js
      |-- FlightBooking.js
      |-- Hotel.js
      |-- Package.js
  |-- routes/
      |-- carRentalRoutes.js
      |-- flightRoutes.js
      |-- hotelRoutes.js
      |-- packageRoutes.js
  |-- server.js
  |-- .env
  |-- .gitignore
  |-- package.json
  |-- README.md
```

---

## Development / Geliştirme

While developing the application, you can use **nodemon** to automatically restart the server when files change.

Uygulama geliştirirken **nodemon** kullanarak dosya değişikliklerinde otomatik olarak sunucuyu yeniden başlatabilirsiniz.

```bash
npm run dev
```

---

## Contribution / Katkı

If you would like to contribute to this project, please create an **issue** first. After discussing your changes, you can send a **pull request**. We welcome your contributions!

Bu projeye katkıda bulunmak isterseniz, lütfen önce bir **issue** oluşturun. Değişikliklerinizi tartıştıktan sonra bir **pull request** gönderebilirsiniz. Katkılarınızı bekliyoruz!

---

