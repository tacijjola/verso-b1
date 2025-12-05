# Verso B1 🇮🇹

**Learn Italian from zero to B1 certification!**

An interactive Italian learning app with 20 lessons across 4 levels (A0 → A1 → A2 → B1), featuring vocabulary, dialogues, grammar notes, and exercises.

## 🚀 Quick Deploy (Recommended)

### Option 1: Vercel (Easiest - 2 minutes!)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Import your GitHub repository (or drag & drop this folder)
4. Click "Deploy" - that's it!

Your app will be live at `your-project-name.vercel.app`

### Option 2: Netlify (Also super easy)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `dist` folder (after running `npm run build`)
3. Or connect your GitHub repo for automatic deploys

---

## 💻 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with your production-ready app.

---

## 📁 Project Structure

```
verso-b1-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main app with all lessons
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

---

## ✨ Features

- **4 Levels**: A0, A1, A2, B1
- **20 Lessons**: 5 per level
- **Real-life scenarios**: Café, restaurant, doctor, travel, work
- **Interactive exercises**: Multiple choice & word matching
- **Progress tracking**: Saved locally in your browser
- **Beautiful design**: Italian-inspired colors & typography

---

## 🎯 Future Ideas

- [ ] Audio pronunciation
- [ ] Speech-to-text exercises  
- [ ] More exercise types (fill-in-blank, typing)
- [ ] Spaced repetition flashcards
- [ ] User accounts & cloud sync

---

## 📝 Credits

Inspired by [Teacher Stefano](https://school.teacherstefano.com/)

Built with React + Vite

---

## 📄 License

MIT - Feel free to use and modify!
