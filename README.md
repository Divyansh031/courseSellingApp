
# 🎓 EduNova - Course Selling MERN App

EduNova is a full-stack web application that allows users to browse, purchase, and manage courses. Built using the MERN stack (MongoDB, Express, React, Node.js), with user authentication and role-based access for admins and users.

---

## 🚀 Features

- 🔐 JWT Authentication (Signup/Login)
- 📚 Course Browsing and Purchase
- 🛒 Purchase History
- 🔧 Admin Course Management
- 🌐 Responsive Frontend using Tailwind CSS

---

## 🧠 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB 
- **Auth**: JWT with `httpOnly` cookies
- **Hosting**: Vercel (Frontend) + Render (Backend)

---


## 💻 API Endpoints

### 🔸 User Authentication (`/user`)
- **POST** `/user/signup`  
  *Register a new user.*  
  **Body**: `{ firstName, lastName, email, password }`

- **POST** `/user/login`  
  *Login a user.*  
  **Body**: `{ email, password }`

- **GET** `/user/logout`  
  *Logout a user (clears cookie/token).*

- **GET** `/user/purchases`  
  *Fetch purchased courses for current user.*  
  **Headers**: `Authorization: Bearer <token>`

---

### 📚 Course APIs (`/course`)
- **GET** `/course/courses`  
  *List all available courses.*

- **GET** `/course/:courseId`  
  *Get details of a specific course.*

- **POST** `/course/buy/:courseId`  
  *Inititate purchase to get Stripe `clientSecret`.*  
  **Headers**: `Authorization: Bearer <token>`

---

### 🛒 Order APIs (`/order`)
- **POST** `/order`  
  *Record successful payment and save to purchases.*  
  **Body**: `{ userId, courseId, paymentId, amount, status }`  
  **Headers**: `Authorization: Bearer <token>`

---

### 🛠️ Admin APIs (`/admin`)
- **POST** `/admin/signup`  
  *Register an admin.*  
  **Body**: `{ firstName, lastName, email, password }`

- **POST** `/admin/login`  
  *Login as admin (returns `token`).*  
  **Body**: `{ email, password }`

- **GET** `/admin/logout`  
  *Logout admin (clears credentials).*

- **POST** `/admin/create-course`  
  *Create new course.*  
  **Body**: form-data with `{ title, description, price, image file }`

- **PUT** `/admin/update-course/:courseId`  
  *Update a course (text & image optional).*  
  **Body**: form-data

- **DELETE** `/admin/delete-course/:courseId`  
  *Remove course from catalog.*

- **GET** `/admin/our-courses`  
  *List admin-created courses.*

---


## 🚀 Setup & Run Locally

### 1. Clone
```bash
git clone https://github.com/Divyansh031/courseSellingApp.git
cd courseSellingApp
```
### 2. Setup Backend
```bash
cd backend
npm install
```
### 3. Add .env
```bash
PORT=4001
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<secret>
STRIPE_SECRET_KEY=<stripe_key>
FRONTEND_URL=http://localhost:5173
```
### 4. Start Server
```bash
npm run dev
```
### 5. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
### 6. Visit Frontend
```bash
URL: http://localhost:5173
```
---

## ☁️Deployment
**Frontend** on **Vercel**

**Backend** on **Render**

Set env vars on host per backend’s `.env`

---
## 👤 Author
**Divyansh Sharma**



