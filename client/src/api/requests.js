// Get game details
export const fetchFortunes = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/cookie-api/fortune`,
    {
      method: "GET",
    }
  );
  const fortunes = await response.json();

  return fortunes;
};

// Update just one slot
export const updateFortune = async (config) => {
  const { id, body } = config;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/cookie-api/fortune/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const updatedFortune = await response.json();

  return updatedFortune;
};
