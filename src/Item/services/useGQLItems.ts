const URI = `http://localhost:5000/`;
const headers = { "Content-Type": "application/json" };

export const useGQLItems = () => {
  const getItems = () =>
    fetch(URI, {
      method: "POST",
      headers,
      body: JSON.stringify({ query: "{ allItems { id name value } }" }),
    })
      .then((response) => response.json())
      .then(({ data: { allItems } }) => allItems);

  const addItem = ({ name, value }) =>
    fetch(URI, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: `mutation ($id: ID! $name: String! $value: Int!) {
          createItem(id: $id name: $name value: $value) {
            id
            name
            value
          }
        }`,
        variables: JSON.stringify({
          id: Math.floor(Math.random() * 100),
          name: name,
          value: value,
        }),
      }),
    })
      .then((response) => response.json())
      .then(({ data: { createItem } }) => createItem);

  return {
    getItems,
    addItem,
  };
};
