
<div align="center">

<!-- <img src="public/favicon.svg" alt="URL Shortener Logo" width="180"/> -->

# ✨ URL Shortener - Simplify Your Links ✨

> 🔗 Shorten, Track, and Manage URLs with Ease

[![React](https://img.shields.io/badge/React-2023-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=1e1e1e)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-NextGen-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=1e1e1e)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white&labelColor=1e1e1e)](https://axios-http.com/)
[![React Router](https://img.shields.io/badge/React%20Router-Dynamic%20Routing-F44250?style=for-the-badge&logo=react-router&logoColor=white&labelColor=1e1e1e)](https://reactrouter.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white&labelColor=1e1e1e)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Node.js-BackEnd-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=1e1e1e)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-Minimal%20Server-000000?style=for-the-badge&logo=express&logoColor=white&labelColor=1e1e1e)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=1e1e1e)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white&labelColor=1e1e1e)](https://jwt.io/)

[![GitHub stars](https://img.shields.io/github/stars/SubhodeepSamanta/URL-Shortener?style=social)](https://github.com/SubhodeepSamanta/URL-Shortener/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SubhodeepSamanta/URL-Shortener?style=social)](https://github.com/SubhodeepSamanta/URL-Shortener/network/members)
[![GitHub issues](https://img.shields.io/github/issues/SubhodeepSamanta/URL-Shortener?style=social)](https://github.com/SubhodeepSamanta/URL-Shortener/issues)

---

</div>

## ✨ Features

- 🔐 JWT-based User Authentication
- 🔗 Shorten long URLs with optional custom slugs
- 📊 Dashboard with click tracking and analytics
- 🔁 Redirection from short URL to original
- 📋 Copy short URLs with one click

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB URI
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/SubhodeepSamanta/URL-Shortener.git
cd URL-Shortener
```

### 2. Backend Setup

```bash
cd backend
npm install

# Create .env file and add:
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install

# Create .env file and add:
VITE_BACKEND_URL=http://localhost:5000
```

### 4. Run the App

```bash
# Backend
cd backend
npm run dev

# Frontend (new terminal)
cd frontend
npm run dev
```

### 📁 Environment Variables

#### Backend

| Variable      | Description               | Example                              |
|---------------|---------------------------|--------------------------------------|
| `PORT`        | Server Port               | 5000                                 |
| `MONGODB_URI` | MongoDB Connection String | mongodb+srv://...                    |
| `JWT_SECRET`  | JWT Secret Key            | your-secret-key                      |

#### Frontend

| Variable          | Description     | Example              |
|-------------------|-----------------|----------------------|
| `VITE_BACKEND_URL`| API base URL    | http://localhost:5000|

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- React Router
- Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT

## 🖼️ Screenshots

<div align="center">

| Homepage | Signup | Login |
|---------|--------|-------|
| ![Homepage](screenshots/homepage.png) | ![Signup](screenshots/signup.png) | ![Login](screenshots/login.png) |

| Dashboard | Working Example |
|-----------|------------------|
| ![Dashboard](screenshots/dashboard.png) | ![Working](screenshots/working.png) |

</div>

## 💻 Development Scripts

| Command        | Description           |
|----------------|-----------------------|
| `npm run dev`  | Starts frontend/backend in dev mode |

## 🤝 Contributing

We welcome contributions!

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)

---

<div align="center">

Made with ❤️ by [SubhodeepSamanta](https://github.com/SubhodeepSamanta)

</div>
