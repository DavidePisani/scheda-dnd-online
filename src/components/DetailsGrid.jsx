// src/components/DetailsGrid.jsx
import React from "react";

function DetailsGrid({ characterClass, race, background, alignment }) {
  const details = [
    { label: "Classe & Multiclasse", value: characterClass },
    { label: "Specie", value: race },
    { label: "Background", value: background },
    { label: "Allineamento", value: alignment },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg shadow mb-8">
      {details.map((item, index) => (
        <div key={index} className="bg-gray-700 p-3 rounded">
          <div className="text-xs uppercase text-gray-400 mb-1">{item.label}</div>
          <div className="text-lg font-bold text-white">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export default DetailsGrid;
