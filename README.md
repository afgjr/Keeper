# 📝 Keeper App

A beautiful, responsive, and full-stack note-taking application inspired by Google Keep. Built with a modern web stack, it features a handwritten aesthetic, dynamic color customization, and full database persistence.

---

## ✨ Features

- **Rich Note Management**: Create, view, edit, and delete notes with ease.
- **Custom Color Palette**: Personalize each note card with one of 12 beautifully curated pastel colors.
- **Handwritten Aesthetic**: Uses Google Fonts (`Kalam` and `Caveat`) to give your notes an authentic sticky-note feel.
- **Mobile Responsive**: Optimized for all screen sizes, from desktop to mobile.
- **Live Updates**: Instant feedback and state management via React.
- **Robust Validation**: Prevents accidental creation of empty notes (requires both Title and Content).
- **Persistent Storage**: All notes are securely saved in a MongoDB database.

---

## 🚀 Technologies Used

### Frontend
- **React.js**: For a dynamic and fast user interface.
- **React Hooks**: Efficient state management and side-effects.
- **Material UI Icons**: Premium iconography for note actions.
- **Vanilla CSS3**: Custom-crafted styling and mobile-responsive layouts.
- **Google Fonts API**: Premium typography for an authentic look and feel.

### Backend
- **Node.js & Express**: Scalable and fast server architecture.
- **MongoDB & Mongoose**: Flexible and robust NoSQL database storage.
- **Dotenv**: Secure management of environment variables.
- **Nodemon**: Seamless hot-reloading for rapid development.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) running locally

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/keeper.git
   cd keeper
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the project root:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/keeperdb
     ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the App

1. **Start the Backend** (from the `backend` folder)
   ```bash
   npm run dev
   ```

2. **Start the Frontend** (from the `frontend` folder)
   ```bash
   npm start
   ```
   Go to `http://localhost:3000` to see the app!

---

## 📂 Project Structure

```text
keeper/
├── backend/            # Express server & API routes
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API route handlers
│   └── server.js      # Main entry point
├── frontend/           # React application
│   ├── public/        # Static assets (including styles.css)
│   └── src/           # Components & App logic
├── .env.example        # Environment variable template
└── .gitignore          # Git exclusion rules
```

---

## 📜 License
This project is licensed under the ISC License.
