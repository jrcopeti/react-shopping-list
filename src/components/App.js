import { useState } from "react";
import AddItemForm from "./AddItemForm.js";
import List from "./List.js";
import Status from "./Status.js";
import Title from "./Title.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

  return (
    <div>
      <Title />
      <AddItemForm onAddItems={handleAddItems} />
      <List
        items={items}
        onFormatCurrency={formatCurrency}
        onToggleItems={handleToggleItems}
        onDeleteItems={handleDeleteItems}
      />
      <Status items={items} onFormatCurrency={formatCurrency} />
    </div>
  );
}
