# 🧠 MernThinkBoard

A modern, full-stack note-taking web app built with the **MERN** stack (MongoDB, Express, React, Node.js), styled using **Tailwind CSS** and **DaisyUI**.  
Create, edit, and delete notes with a beautiful, responsive UI and robust backend.  
**Deployed on:**  
- **Frontend:** GitHub Pages  
- **Backend:** Render (free plan, may take a few seconds to wake up)

---

## 🌐 Live Demo

- **Backend API:** [https://noteapp-ng53.onrender.com/](https://noteapp-ng53.onrender.com/)

> ⚠️ **Note:** The backend is hosted on Render’s free plan. The API may take up to 30 seconds to wake up after inactivity.

---

## ✨ Features

- **Create, edit, and delete notes**
- **Persistent storage** with MongoDB
- **Rate limiting** to prevent spam (Upstash Redis)
- **Modern, responsive UI** with Tailwind CSS & DaisyUI
- **Toast notifications** for feedback
- **RESTful API** with Express
- **Beautiful icons** with Lucide
- **React Router** for seamless navigation
- **Input validation** and error handling
- **Deployed**: Frontend on GitHub Pages, Backend on Render


## 🛠️ Tech Stack

### Frontend
- [React 19](https://react.dev/) (Vite)
- [Tailwind CSS 3](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [React Router 7](https://reactrouter.com/)
- [Axios](https://axios-http.com/) for API requests
- [Lucide Icons](https://lucide.dev/)
- [react-hot-toast](https://react-hot-toast.com/) for notifications

### Backend
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [Upstash Redis](https://upstash.com/) for rate limiting
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variables
- [CORS](https://www.npmjs.com/package/cors)

---

## 📁 Project Structure

```
MernThinkBoard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── model/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── pages/
│   │   ├── Utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── package.json
│   └── index.html
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rishi-2406/NoteApp.git
cd NoteApp
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env   # Or create your own .env file
npm run dev
```
**.env example:**
```ini
MONGODB_URI=your-mongodb-uri
PORT=5000
UPSTASH_REDIS_REST_URL=your-upstash-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```
> Make sure MongoDB is running and your `.env` variables are set.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```
To build for production:
```bash
npm run build
```

---

## 📦 Deployment

- **Frontend:** Built with Vite, deployed to GitHub Pages.
- **Backend:** Deployed to Render ([see API](https://noteapp-ng53.onrender.com/)).

---

## 📚 API Endpoints

| Method | Endpoint                | Description           |
|--------|------------------------ |----------------------|
| GET    | `/api/notes`            | Get all notes        |
| POST   | `/api/notes`            | Create a new note    |
| PUT    | `/api/notes/:id`        | Edit a note          |
| DELETE | `/api/notes/:id`        | Delete a note        |

> All endpoints are rate-limited to prevent abuse.

---

## 📌 Usage Notes

- **Backend cold starts:** The Render backend may take up to 30 seconds to wake up after inactivity.
- **MongoDB:** You need your own MongoDB URI for local development.
- **Rate limiting:** Too many requests in a short time will result in a 429 error.

---

## 🤝 Contributing

PRs are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

**Happy Note Taking!**

---

> _Want to contribute, add features, or report bugs? Open an issue or PR!_
