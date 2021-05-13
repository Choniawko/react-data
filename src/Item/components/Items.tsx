import { ItemList, ItemForm, ItemProvider } from "..";

export const Items = () => {
  return (
    <ItemProvider>
      <ItemForm />
      <ItemList />
    </ItemProvider>
  );
};
