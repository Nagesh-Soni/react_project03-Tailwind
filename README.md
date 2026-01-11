🎵 React Music Player

A simple React Music Player built using React Hooks (useState).
This project allows users to play/pause music and navigate between songs using Next and Previous buttons.

✨ Features
▶️ Play / ⏸ Pause functionality
⏭ Next song
⏮ Previous song
🔁 Playlist loops automatically
🖼 Displays song image, title, and singer
⚛ Built with React Hooks
🛠 Tech Stack
React JS
React Hooks (useState)
JavaScript (ES6)
CSS / Tailwind CSS

📂 Project Structure
src/
│── Componentes/
│   └── music.jsx
│── index.css
│── main.jsx

📦 Songs Data Example
const songs = [
  {
    Song: "Tum Hi Ho",
    Singer: "Arijit Singh",
    Img: "image_url_here"
  },
  {
    Song: "Kesariya",
    Singer: "Arijit Singh",
    Img: "image_url_here"
  }
];

⚙️ How It Works
useState stores the current song index
Clicking Next increases the index
Clicking Previous decreases the index
% songs.length ensures playlist loops infinitely
UI updates automatically when state changes

🚀 Installation & Run
Clone the repository
git clone https://github.com/Nagesh-Soni/react_project03-Tailwind.git
Go to project folder
cd react-music-player
Install dependencies
npm install
Start the project
npm run dev

📸 Preview
A simple music card with song image, title, singer, and controls

📚 Learning Outcome

Understanding React Hooks
Managing state using useState
Handling events with onClick
Building reusable React components
Avoiding direct DOM manipulation

🙌 Future Improvements

🎧 Add real audio playback
⏱ Progress bar
🔀 Shuffle mode
❤️ Favorite songs
📱 Mobile responsiveness

👨‍💻 Author
Nagesh Soni
GitHub: https://github.com/Nagesh-Soni

⭐ If you like this project, give it a star on GitHub!
