
import { useState } from "react";
import { factions } from "../data/factions";
import UnitCard from "../components/UnitCard";
import { useArmy } from "../context/ArmyContext";

export default function Factions() {
  const [selectedFaction, setSelectedFaction] = useState(
    factions[0]
  );

  const { addUnit } = useArmy();

  return (
    <main className="container">
      <h1>Explore the Factions</h1>

      <p>Choose an army and discover its available units.</p>

      <div className="faction-grid">
        {factions.map((faction) => (
          <button
            key={faction.id}
            className={
              selectedFaction.id === faction.id
                ? "faction-button active"
                : "faction-button"
            }
            onClick={() => setSelectedFaction(faction)}
          >
            {faction.name}
          </button>
        ))}
      </div>

      <section className="content-section">
        <h2>{selectedFaction.name}</h2>
        <p>{selectedFaction.description}</p>

        <div className="unit-grid">
          {selectedFaction.units.map((unit) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              onAdd={addUnit}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

