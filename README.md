<div align="center">

<img src="public/favicon.svg" alt="URL Shortener Logo" width="150"/>

# ✨ URL Shortener - Simplify Your Links ✨

> 🔗 A secure, full-stack application to shorten, track, and manage your URLs with ease.

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=20232A)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=20232A)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)

[![GitHub stars](https://img.shields.io/github/stars/subhodeepsamanta/url-shortener?style=social)](https://github.com/subhodeepsamanta/url-shortener/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/subhodeepsamanta/url-shortener?style=social)](https://github.com/subhodeepsamanta/url-shortener/network/members)
[![GitHub issues](https://img.shields.io/github/issues/subhodeepsamanta/url-shortener?style=social)](https://github.com/subhodeepsamanta/url-shortener/issues)

---

</div>

## ✨ Features

- 🔐 **JWT Authentication** – Secure user login, registration, and logout
- 🔗 **Custom URL Shortening** – Generate shortened URLs with optional slugs
- 📊 **Click Tracking** – Track number of visits per short link
- 📁 **Dashboard** – Manage your URLs with copy and analytics
- 🚀 **Fast Performance** – Built with Vite and optimized routing
- 🌐 **Clean UI** – Simple and intuitive design using custom CSS

---

## 🚀 Quick Start

### 🧰 Prerequisites

- Node.js `v18+`
- npm `v9+`
- MongoDB instance (local or cloud)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/subhodeepsamanta/url-shortener.git
cd url-shortener
```

---

### 2️⃣ Backend Setup

```bash
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Create .env file
touch .env
```

#### 🔐 Backend `.env` Variables

| Variable       | Description                   | Example                                  |
|----------------|-------------------------------|------------------------------------------|
| `PORT`         | Backend port                  | `5000`                                   |
| `MONGODB_URI`  | MongoDB connection string     | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET`   | Secret for JWT token signing  | `your_jwt_secret_here`                   |

```bash
# Start backend server
npm run server
```

---

### 3️⃣ Frontend Setup

```bash
# Open a new terminal window
cd client

# Install dependencies
npm install

# Create .env file
touch .env
```

#### 🌐 Frontend `.env` Variables

| Variable            | Description           | Example              |
|---------------------|-----------------------|----------------------|
| `VITE_BACKEND_URL`  | Backend server URL    | `http://localhost:5000` |

```bash
# Start frontend server
npm run dev
```

---

### 4️⃣ Access the Application

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## 💻 Development Scripts

<div align="center">

| Command         | Description                |
|----------------|----------------------------|
| `npm run dev`  | Starts Vite dev server     |
| `npm run server` | Starts Express backend server |

</div>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite)
![Axios](https://img.shields.io/badge/Axios-1.6.0-5A29E4?style=flat-square&logo=axios)
![React Router](https://img.shields.io/badge/React_Router-6.22.2-CA4245?style=flat-square&logo=react-router)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-20.0.0-339933?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18.0-000000?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0.0-47A248?style=flat-square&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-secure-F7DF1E?style=flat-square&logo=jsonwebtokens)

</div>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create your feature branch:  
   `git checkout -b feature/YourAmazingFeature`
3. Commit your changes:  
   `git commit -m 'Add YourAmazingFeature'`
4. Push to the branch:  
   `git push origin feature/YourAmazingFeature`
5. Open a Pull Request

<div align="center">

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

</div>

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🙏 Acknowledgments

<div align="center">

| Resource | Description |
|----------|-------------|
| [React](https://reactjs.org/) | UI Library |
| [Vite](https://vitejs.dev/) | Frontend build tool |
| [MongoDB](https://mongodb.com) | NoSQL Database |
| [JWT.io](https://jwt.io/) | Token Authentication |
| [Express](https://expressjs.com/) | Backend framework |

</div>

---

<div align="center">

### Crafted with 💙 by [Subhodeep Samanta](https://github.com/subhodeepsamanta)

[![GitHub Follow](https://img.shields.io/github/followers/subhodeepsamanta?style=social)](https://github.com/subhodeepsamanta)

</div>