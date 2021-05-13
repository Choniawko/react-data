import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ItemProperties } from "../Item";
import { useItemService } from "..";

export const ItemForm = () => {
  const queryClient = useQueryClient();
  const { addItem } = useItemService();
  const { mutate } = useMutation<any, Error, ItemProperties>(addItem, {
    onSuccess: (response) => {
      queryClient.setQueryData("items", (old: any) => [...old, response]);
    },
  });
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      name,
      value: Math.floor(Math.random() * 100),
    });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Item:{" "}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name='item'
      />
    </form>
  );
};
