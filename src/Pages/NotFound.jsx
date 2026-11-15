
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container not-found">
      <h1>404</h1>
      <h2>Lost in the Warp!</h2>
      <p>This page does not exist in the Imperium Archives.</p>
      <Link to="/" className="primary-button">
        Return Home
      </Link>
    </main>
  );
}

