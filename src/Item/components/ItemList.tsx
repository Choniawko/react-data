import { useQuery } from "react-query";
import { Item } from "../Item";
import { useItemService } from "../services/itemService";

export const ItemList = () => {
  const { getItems } = useItemService();
  const { isLoading, error, data } = useQuery<Item[], Error>("items", getItems);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: " + {error.message}</div>;
  return data ? (
    <div>
      {data.map(({ id, name, value }: any) => (
        <div key={id}>
          <div>
            Name: {name} Value: {value}
          </div>
        </div>
      ))}
    </div>
  ) : null;
};
