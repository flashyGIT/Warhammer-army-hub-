
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ArmyProvider } from "./context/ArmyContext";
import Home from "./pages/Home";
import UnitCard from "./components/UnitCard";

describe("Imperium Archives", () => {
  it("renders the home page", () => {
    render(
      <MemoryRouter>
        <ArmyProvider>
          <Home />
        </ArmyProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Welcome to the Imperium Archives")
    ).toBeInTheDocument();
  });

  it("renders a unit card", () => {
    const unit = {
      id: 1,
      name: "Space Marine",
      points: 80,
      type: "Battleline"
    };

    render(<UnitCard unit={unit} onAdd={() => {}} />);

    expect(screen.getByText("Space Marine")).toBeInTheDocument();
    expect(screen.getByText("80 points")).toBeInTheDocument();
  });
});
