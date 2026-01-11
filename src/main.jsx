import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Music from './Componentes/music.jsx'

const songs = [
  {
    Song: "Tum Hi Ho",
    Singer: "Arijit Singh",
    Img: "https://imgs.search.brave.com/InpSZ_E05socgmdSX94HUBsuR00ZpA5owTAgpWI8SFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3MTc5/MTIuanBn"
  },
  {
    Song: "Kesariya",
    Singer: "Arijit Singh",
    Img: "https://imgs.search.brave.com/mZFIBLL_XUCFLSwDWRS_-SABprFyc-nMKs9Tf6sxsr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTA4/MTM2MjAuanBn"
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Music songs={songs} />
  </StrictMode>
);
