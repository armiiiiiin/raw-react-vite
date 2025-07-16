import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'

import App from './App.jsx'
import Card from './Card.jsx';
import Cars from './pages/Cars.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/card" element={<Card />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  </BrowserRouter>
)
