import React, { useState } from "react";

export default function CalculadoraFestaMagica() {
  const [convidados, setConvidados] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const doces = convidados * 5;
    const salgados = convidados * 7;
    const bebidas = convidados * 400; // em ml

    setResultado({ doces, salgados, bebidas });
  };

  return (
    <div className="p-8 bg-pink-50 min-h-screen text-gray-800 font-sans">
      <h1 className="text-3xl text-pink-600 font-bold text-center mb-6">
        🎉 Calculadora de Festa Mágica
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <label className="block mb-4">
          <span className="block text-pink-500 font-semibold mb-2">
            Quantos convidados terão na festa?
          </span>
          <input
            type="number"
            className="w-full border border-pink-300 rounded px-4 py-2"
            value={convidados}
            onChange={(e) => setConvidados(Number(e.target.value))}
          />
        </label>

        <button
          onClick={calcular}
          className="w-full bg-pink-500 text-white font-semibold py-3 rounded hover:bg-pink-600"
        >
          Calcular ✨
        </button>

        {resultado && (
          <div className="mt-6 bg-pink-100 p-4 rounded shadow-inner">
            <h2 className="text-xl text-pink-600 font-bold mb-2">
              Sugestão de Quantidades:
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                🍬 <strong>{resultado.doces}</strong> docinhos
              </li>
              <li>
                🥟 <strong>{resultado.salgados}</strong> salgados
              </li>
              <li>
                🥤 <strong>{resultado.bebidas}ml</strong> de bebidas
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
