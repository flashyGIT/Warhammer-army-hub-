
import { createContext, useContext, useState } from "react";

const ArmyContext = createContext();

export function ArmyProvider({ children }) {
  const [army, setArmy] = useState([]);

  function addUnit(unit) {
    setArmy((currentArmy) => [
      ...currentArmy,
      { ...unit, rosterId: crypto.randomUUID() }
    ]);
  }

  function removeUnit(rosterId) {
    setArmy((currentArmy) =>
      currentArmy.filter((unit) => unit.rosterId !== rosterId)
    );
  }

  const totalPoints = army.reduce(
    (total, unit) => total + unit.points,
    0
  );

  return (
    <ArmyContext.Provider
      value={{ army, addUnit, removeUnit, totalPoints }}
    >
      {children}
    </ArmyContext.Provider>
  );
}

export function useArmy() {
  const context = useContext(ArmyContext);

  if (!context) {
    throw new Error("useArmy must be used inside ArmyProvider");
  }

  return context;
}

