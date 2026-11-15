
export default function UnitCard({ unit, onAdd }) {
  return (
    <article className="unit-card">
      <span className="unit-type">{unit.type}</span>

      <h3>{unit.name}</h3>

      <p>{unit.points} points</p>

      <button onClick={() => onAdd(unit)}>
        Add to Army
      </button>
    </article>
  );
}

