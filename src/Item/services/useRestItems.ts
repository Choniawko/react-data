const getURI = (endpoint) => `http://localhost:4000/${endpoint}`;
const headers = { "Content-Type": "application/json" };

export const useRestItems = () => {
  const getItems = () =>
    fetch(getURI("items")).then((response) => response.json());

  const addItem = (newItem) =>
    fetch(getURI("items"), {
      method: "POST",
      headers,
      body: JSON.stringify(newItem),
    }).then((response) => response.json());

  return {
    getItems,
    addItem,
  };
};
