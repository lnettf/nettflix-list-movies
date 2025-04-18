# 🎬 NettFlix Client

**NettFlix Client** is a frontend React application that consumes the [NettFlix API](https://nettflix.onrender.com). It allows users to sign up, log in, browse and filter movies, view popular titles, and create, update, or delete movie reviews.

This project uses:

- ✅ React
- 🔗 Axios (for API requests)
- 🎨 Styled Components (for styling)

---

## 🚀 Features

- 🔐 User authentication (sign up / login)
- 🎞️ Browse all movies and filter by genre
- 🌟 View popular movies with customizable limits
- 📝 View and manage your own reviews (protected routes)
- 📃 View public reviews for each movie

---

## 📦 Installation

```bash
git clone https://github.com/lnettf/nettflix-list-movies
cd nettflix-list-movies
npm install
```

---

## 🛠️ Configuration

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_API_URL=https://nettflix.onrender.com
```

---

## 🧪 Usage

Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

---

## 💅 Styling

All styles are handled using [Styled Components](https://styled-components.com/). This allows for component-level styles with full CSS support inside your JavaScript files.

---

## 🔐 Authentication

JWT token is stored in localStorage after login and is sent with every protected request using Axios interceptors.
