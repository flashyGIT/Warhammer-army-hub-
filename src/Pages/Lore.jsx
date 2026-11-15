
import { useEffect, useState } from "react";
import { getWarhammerLore } from "../services/api";

export default function Lore() {
  const [lore, setLore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLore() {
      try {
        setLoading(true);
        setError("");

        const data = await getWarhammerLore();
        setLore(data);
      } catch {
        setError("Unable to load lore. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadLore();
  }, []);

  if (loading) return <main className="container">Loading lore...</main>;

  if (error) {
    return (
      <main className="container">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Warhammer Lore Archives</h1>

      <article className="lore-card">
        <h2>{lore.title}</h2>

        {lore.thumbnail && (
          <img
            src={lore.thumbnail.source}
            alt={lore.title}
            className="lore-image"
          />
        )}

        <p>{lore.extract}</p>

        <a href={lore.content_urls.desktop.page}
           target="_blank"
           rel="noreferrer">
          Read More
        </a>
      </article>
    </main>
  );
}

