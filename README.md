# 🧪 Experiment 4: Concurrent Ticket Booking System

**Name:** Rashi Popli
**UID:** 24BDA70367

---

# 🎟️ Concurrent Ticket Booking System

A backend system that simulates **real-time ticket booking** with concurrency control using Redis.

---

## 🚀 Live Demo

👉 https://booking-system-7v04.onrender.com

---

## 📌 Features

* Prevents **overbooking** using Redis
* Handles **multiple concurrent requests**
* Uses **atomic operations** for seat allocation
* Simple REST API for booking tickets

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **Redis (Cloud Database)**
* **Render (Deployment)**

---

## ⚙️ API Endpoint

### 🔹 Book Ticket

**POST** `/api/book`

#### 📥 Response Example

```json
{
  "success": true,
  "bookingId": 1718369248709,
  "remaining": 99
}
```

---

## 🧠 How It Works

* Total seats are initialized in Redis
* Each booking request **atomically decreases** available seats
* Prevents race conditions using Redis operations
* Ensures **no duplicate or excess bookings**

---

## 🧪 Testing

The API can be tested using:

* Postman
* Thunder Client
* Browser (for root route)

---

## 📂 Project Structure

```
booking-system/
│
├── booking-system.js  
├── package.json  
├── README.md  
├── .gitignore  
```

---

## 🧑‍💻 Author

Rashi Popli

---

## 📎 Note

This project was developed as part of **Experiment 4** focusing on concurrency control using Redis.
