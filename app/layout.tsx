"use client"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../app/index';
import PokemonData from './pokemon/[name]';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pokemon/:name" element={<PokemonData />} />
      </Routes>
    </Router>
  );
}