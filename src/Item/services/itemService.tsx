import { createContext, useContext, FC } from "react";
import { Item, ItemProperties } from "../Item";
// import { useRestItems } from "./useRestItems";
import { useGQLItems } from "./useGQLItems";

interface ItemService {
  getItems: () => Promise<Item[]>;
  addItem: (newItem: ItemProperties) => Promise<Item>;
}

export const ItemContext = createContext<ItemService>({} as ItemService);

export const ItemProvider: FC = ({ children }) => {
  return (
    <ItemContext.Provider value={useGQLItems()}>
      {children}
    </ItemContext.Provider>
  );
};
export const useItemService = () => {
  return useContext(ItemContext);
};
