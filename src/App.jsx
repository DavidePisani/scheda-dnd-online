import React from "react";
import characterData from "./data/characterData";
import Header from "./components/Header";
import KeyStats from "./components/KeyStats";
import DetailsGrid from "./components/DetailsGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <Header data={characterData} />
        <DetailsGrid
          characterClass={characterData.class}
          race={characterData.race}
          background={characterData.background}
          alignment={characterData.alignment}
        />
        <KeyStats
        level={characterData.level}
        proficiencyBonus={characterData.proficiencyBonus}
        />
        
      </div>
    </div>
  );
}

export default App;
