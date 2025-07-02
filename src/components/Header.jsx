// src/components/Header.jsx

import React from "react";

function Header({ data }) {
  return (
    <header className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-8">
      <div className="w-full h-[300px] bg-gray-800 rounded overflow-hidden shadow-lg">
        <img
          src={data.imageUrl}
          alt="Ritratto"
          className="object-cover w-full h-full"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <h1 className="text-5xl font-serif text-purple-400">{data.name}</h1>
        <p className="text-sm text-gray-400">
          {data.race} • {data.class} • {data.alignment}
        </p>
        <p className="text-sm text-gray-400">Background: {data.background}</p>
        <div className="mt-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white font-bold">
            Modifica Scheda
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
