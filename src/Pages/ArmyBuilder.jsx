
import { factions } from "../data/factions";
import { useArmy } from "../context/ArmyContext";

export default function ArmyBuilder() {
  const { army, addUnit, removeUnit, totalPoints } = useArmy();

  return (
    <main className="container">
      <h1>Army Builder</h1>

      <p>Build your forces for the battlefield.</p>

      <section className="army-summary">
        <h2>Your Army</h2>
        <h3>{totalPoints} Points</h3>
        <p>{army.length} Units Selected</p>
      </section>

      <section className="content-section">
        <h2>Available Units</h2>

        <div className="unit-grid">
          {factions.flatMap((faction) =>
            faction.units.map((unit) => (
              <article className="unit-card" key={unit.id}>
                <span className="unit-type">
                  {faction.name}
                </span>
                <h3>{unit.name}</h3>
                <p>{unit.points} points</p>

                <button onClick={() => addUnit(unit)}>
                  Add Unit
                </button>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="content-section">
        <h2>Your Selected Units</h2>

        {army.length === 0 ? (
          <p>Your army is empty. Add some units to get started!</p>
        ) : (
          army.map((unit) => (
            <article className="roster-item" key={unit.rosterId}>
              <div>
                <strong>{unit.name}</strong>
                <p>{unit.points} points</p>
              </div>

              <button
                className="remove-button"
                onClick={() => removeUnit(unit.rosterId)}
              >
                Remove
              </button>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

