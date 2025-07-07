import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Brindes from "./components/Brindes";
import CalculadoraFestaMagica from "./components/CalculadoraFestaMagica";
import EnviarDados from "./components/EnviarDados";
import Indicacoes from "./components/Indicacoes";
import Planner from "./components/Planner";

function App() {
  return (
    <Router>
      <nav className="bg-pink-100 p-4 flex justify-center gap-4 rounded-b-xl text-sm font-semibold">
        <Link to="/">🏠 Início</Link>
        <Link to="/blog">📝 Blog</Link>
        <Link to="/enviar-dados">📤 Enviar Dados</Link>
        <Link to="/indicacoes">🌟 Indicações</Link>
        <Link to="/brindes">🎁 Brindes</Link>
        <Link to="/planner">📅 Planner</Link>
        <Link to="/calculadora">🧮 Calculadora</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/brindes" element={<Brindes />} />
        <Route path="/calculadora" element={<CalculadoraFestaMagica />} />
        <Route path="/enviar-dados" element={<EnviarDados />} />
        <Route path="/indicacoes" element={<Indicacoes />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}

export default App;
