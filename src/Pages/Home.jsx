
import { Link } from "react-router-dom";
import { factions } from "../data/factions";
import { useArmy } from "../context/ArmyContext";

export default function Home() {
  const { army, totalPoints } = useArmy();

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">IN THE GRIM DARKNESS OF THE FAR FUTURE</p>

        <h1>Welcome to the Imperium Archives</h1>

        <p>
          Explore the factions of Warhammer 40,000
          and build your own army for the battlefield.
        </p>

        <Link to="/factions" className="primary-button">
          Explore Factions
        </Link>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <h2>{factions.length}</h2>
          <p>Available Factions</p>
        </article>

        <article className="stat-card">
          <h2>{army.length}</h2>
          <p>Units in Your Army</p>
        </article>

        <article className="stat-card">
          <h2>{totalPoints}</h2>
          <p>Total Army Points</p>
        </article>
      </section>

      <section className="content-section">
        <h2>Choose Your Allegiance</h2>
        <div className="faction-grid">
          {factions.map((faction) => (
            <article className="faction-card" key={faction.id}>
              <h3>{faction.name}</h3>
              <p>{faction.description}</p>
              <Link to="/factions">Explore →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
