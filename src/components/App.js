import { useState } from "react";
import AddItemForm from "./AddItemForm.js";
import List from "./List.js";
import Status from "./Status.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(value)
  }


  return (
    <div>
      <AddItemForm onAddItems={handleAddItems} />
      <List items={items} onFormatCurrency={formatCurrency} />
      <Status items={items} onFormatCurrency={formatCurrency} />
    </div>
  );
}
