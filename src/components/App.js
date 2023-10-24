import { useState, useEffect } from "react";
import AddItemForm from "./AddItemForm.js";
import List from "./List.js";
import Status from "./Status.js";
import Title from "./Title.js";

export default function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("shoppingListItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingListItems", JSON.stringify(items));
  }, [items]);

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

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  function getCurrencyFromLocale(locale) {
    const knownCurrencies = {
      "en-US": "USD",
      "en-GB": "GBP",
      "de-DE": "EUR",
      "pt-BR": "BRL",
    };
    return knownCurrencies[locale] || "EUR";
  }

  function formatCurrency(value) {
    const userLocale = navigator.language || "de-DE";

    return new Intl.NumberFormat(`${userLocale}`, {
      style: "currency",
      currency: getCurrencyFromLocale(userLocale),
    }).format(value);
  }

  return (
    <div className="app">
      <Title />
      <AddItemForm onAddItems={handleAddItems} />
      <List
        items={items}
        onFormatCurrency={formatCurrency}
        onToggleItems={handleToggleItems}
        onDeleteItems={handleDeleteItems}
        onClearItems={clearItems}
      />
      <Status items={items} onFormatCurrency={formatCurrency} />
    </div>
  );
}
