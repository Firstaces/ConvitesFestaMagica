import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function Home() {
  return <h1 className="text-2xl text-pink-600 text-center mt-10">🎉 Bem-vinda ao Convites Festa Mágica!</h1>;
}

function Blog() {
  return <h1 className="text-xl text-center mt-10">📝 Blog de Dicas</h1>;
}

function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 justify-center bg-pink-100 p-4 rounded shadow">
        <Link to="/">🏠 Início</Link>
        <Link to="/blog">📝 Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;