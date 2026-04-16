# 🏨 LakeSide Hotel Booking System – Frontend

Modern React-based frontend for the LakeSide Hotel Booking platform.  
Provides a seamless UI for browsing rooms, managing bookings, and user authentication.

---

## 🚀 Features

- 🔐 Authentication (Login, Register, Logout)
- 🛏 Browse & Search Rooms
- 📅 Booking System with Checkout Flow
- 👤 User Profile Management
- 🧑‍💼 Admin Panel (Add/Edit Rooms)
- 🔎 Advanced Filtering & Pagination
- 🎨 Responsive UI with reusable components

---

## 🏗️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- Context API (Authentication)
- Axios (API calls)
- CSS

---

## 📂 Project Structure

```bash
src/
│
├── assets
│   └── images
│
├── components
│   ├── admin          # Admin dashboard components
│   ├── auth           # Login, Register, AuthProvider
│   ├── booking        # Booking flow components
│   ├── common         # Shared reusable components
│   ├── home           # Homepage
│   ├── layout         # Navbar, Footer
│   ├── room           # Room management & display
│   └── service        # API integration logic
│
├── utils
│   └── ApiFunctions.js
│
├── App.jsx
├── main.jsx
└── index.css

```

---

🔄 Application Flow

```bash
User → UI (React Components)
     → API Calls (Axios)
     → Backend (Spring Boot APIs)

```
---

⚙️ How to Run

# Clone repo
git clone https://github.com/aseemjan/LakeSideHotel-Client.git

# Navigate
cd LakeSideHotel-Client

# Install dependencies
npm install

# Run development server
npm run dev

---

🔗 Backend Repository
👉 LakeSideHotel-Service - https://github.com/aseemjan/LakeSideHotel-Service