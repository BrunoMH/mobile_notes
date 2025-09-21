# 📒 Notes App (React Native + Expo)

A simple **Notes app** built with [React Native](https://reactnative.dev) and [Expo](https://expo.dev).  
This project demonstrates how to create a styled mobile UI with a header, search bar, and note input field.  

---

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
Start the app:

bash
Copy code
npx expo start
Then choose one of:

Run on Android emulator

Run on iOS simulator

Scan QR code in Expo Go app

📂 Project Structure
pgsql
Copy code
notes-app/
│
├── App.js              # Main entry point with header, search bar, placeholder input
├── package.json
├── app/                # (future: navigation + multiple screens)
└── styles/             # (if you externalize stylesheets)
✨ Current Features
🏷️ Header with "notes" title

🔍 Search bar with search icon + input field

🎨 Custom styling: dark background, yellow search field with borders, rounded corners

🌓 Theme switcher (implemented ✅)

📝 Basic TextInput for note entry

🔮 Roadmap / Pending Features
✅ Implemented
Theme switcher

Allow up to 10 numbers (for calculator-like input)

CSS/styling organized in dedicated file

🔜 Upcoming
Notes List View

Show notes as cards with title and preview text

Scrollable list

Note Detail View

Open a full note when tapped

Back button to return to list

Floating Action Button (FAB)

Large yellow + button

Opens “New Note” creation screen

Search Improvements

Search notes by title or content in real-time

Dynamic Text Scaling

Shrink font size if input space is reduced

Refactor Project Structure

app/ for navigation + screens

styles/ for global theme

components/ for reusable UI (search bar, note card, FAB)