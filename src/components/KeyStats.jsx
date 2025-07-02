// src/components/KeyStats.jsx
import React from "react";

function KeyStats({ level, proficiencyBonus }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {/* Livello */}
      <div className="bg-gray-800 rounded-lg shadow p-4 text-center">
        <div className="text-sm uppercase text-gray-400 mb-1">Livello</div>
        <div className="text-4xl font-bold text-white">{level}</div>
      </div>

      {/* Bonus Competenza */}
      <div className="bg-gray-800 rounded-lg shadow p-4 text-center">
        <div className="text-sm uppercase text-gray-400 mb-1">Bonus Competenza</div>
        <div className="text-4xl font-bold text-white">+{proficiencyBonus}</div>
      </div>
    </div>
  );
}

export default KeyStats;
