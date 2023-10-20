import { useState } from "react";
import AddItemForm from "./AddItemForm.js";
import List from "./List.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div>
      <AddItemForm onAddItems={handleAddItems} />
      <List items={items} />
    </div>
  );
}
