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
      <Route path="/aaa" element={<Card />} />
      <Route path="/aaa" element={<Cars />} />
    </Routes>
  </BrowserRouter>
)
