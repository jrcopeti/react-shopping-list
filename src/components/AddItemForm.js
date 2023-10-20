import { useState } from "react";
export default function AddItemForm({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      quantity,
      name,
    };
    console.log(newItem)
    onAddItems(newItem);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="item" value={name} onChange={(e) => setName((e.target.value))}></input>
        <button>Add Item</button>
      </form>
    </div>
  );
}
