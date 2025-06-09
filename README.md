# 🎓 Course Selling App

A full-stack MERN (MongoDB, Express, React, Node.js) application for selling and purchasing courses. It supports both **User** and **Admin** roles with secure authentication, course purchase tracking, and full course management from an admin dashboard.

---

## 🌐 Live Links

- **Frontend (Vercel):** [https://course-selling-app-nine-beta.vercel.app](https://course-selling-app-nine-beta.vercel.app)
- **Backend (Render):** [https://coursesellingapp-s1zy.onrender.com](https://coursesellingapp-s1zy.onrender.com)

---

## 📌 Features

### 👤 User Features

- 🔐 User Signup and Login
- 🎥 Browse all available courses
- 💳 Buy a course
- 📚 View purchased courses
- 🔒 Protected user routes using localStorage for session persistence

### 🛠️ Admin Features

- 🔐 Admin Signup and Login (Separate from users)
- 📊 Admin Dashboard with protected access
- ➕ Create new courses
- ✏️ Edit/update existing courses
- 🗃️ View and manage all courses
- 🔒 Protected admin routes using a custom route guard

---

## 🧱 Tech Stack

### 🔧 Frontend

- React.js
- Tailwind CSS
- React Router DOM
- React Hot Toast (notifications)

### 🖥️ Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv for environment configuration
- CORS and cookie-based authentication

---

## 📁 Folder Structure

courseSellingApp/
├── backend/ # Node + Express backend
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes for user and admin
│ ├── middlewares/ # Handle Middlewares
│ └── controllers.js # Handle Controls
├── frontend/ # React frontend
│ ├── components/ # User components
│ ├── admin/ # Admin components
│ ├── App.jsx # Main routing
│ └── index.css
├── .env # Environment variables
├── package.json
└── README.md
