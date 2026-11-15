
export async function getWarhammerLore() {
  const response = await fetch(
    "https://en.wikipedia.org/api/rest_v1/page/summary/Warhammer_40,000"
  );

  if (!response.ok) {
    throw new Error("Could not retrieve Warhammer lore");
  }

  return response.json();
}

