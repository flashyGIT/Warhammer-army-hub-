
import { Link, NavLink } from "react-router-dom";
import { useArmy } from "../context/ArmyContext";

export default function Header() {
  const { army } = useArmy();

  return (
    <header className="header">
      <Link to="/" className="logo">
        IMPERIUM <span>ARCHIVES</span>
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/factions">Factions</NavLink>
        <NavLink to="/army-builder">Army Builder</NavLink>
        <NavLink to="/lore">Lore</NavLink>
      </nav>

      <Link to="/army-builder" className="army-count">
        Army: {army.length}
      </Link>
    </header>
  );
}
