
export const factions = [
  {
    id: 1,
    name: "Space Marines",
    description: "The Emperor's genetically enhanced super soldiers.",
    color: "#3979b9",
    units: [
      { id: 101, name: "Intercessor Squad", points: 80, type: "Battleline" },
      { id: 102, name: "Terminator Squad", points: 170, type: "Elite" },
      { id: 103, name: "Redemptor Dreadnought", points: 195, type: "Walker" }
    ]
  },
  {
    id: 2,
    name: "Necrons",
    description: "Ancient mechanical dynasties awakened from their tombs.",
    color: "#24bfa1",
    units: [
      { id: 201, name: "Necron Warriors", points: 100, type: "Battleline" },
      { id: 202, name: "Skorpekh Destroyers", points: 90, type: "Elite" },
      { id: 203, name: "Doomsday Ark", points: 200, type: "Vehicle" }
    ]
  },
  {
    id: 3,
    name: "Orks",
    description: "Violent, unpredictable green-skinned warriors.",
    color: "#76a832",
    units: [
      { id: 301, name: "Boyz", points: 80, type: "Battleline" },
      { id: 302, name: "Nobz", points: 105, type: "Elite" },
      { id: 303, name: "Deff Dread", points: 120, type: "Walker" }
    ]
  },
  {
    id: 4,
    name: "Aeldari",
    description: "An ancient and highly advanced psychic civilization.",
    color: "#b45ad1",
    units: [
      { id: 401, name: "Guardian Defenders", points: 100, type: "Battleline" },
      { id: 402, name: "Wraithguard", points: 170, type: "Elite" },
      { id: 403, name: "Wraithlord", points: 145, type: "Walker" }
    ]
  }
];

