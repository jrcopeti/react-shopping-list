import { useState } from "react";
export default function AddItemForm({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handlePriceChange(e) {
    const onlyNumbers = e.target.value.replace(/[^0-9.,]/g, "");
    setPrice(onlyNumbers);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!quantity || !name || !price) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      quantity,
      name,
      price: Number(price),
      bought: false,
    };
    console.log(newItem);
    onAddItems(newItem);

    setQuantity(1);
    setName("");
    setPrice("");
  }

  return (
    <div>
        <h4>What do you need for your next shopping?</h4>
      <form className="add-form" onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          type="number"
          min="0.1"
          step="0.01"
          placeholder="price"
          value={price}
          onChange={handlePriceChange}
        ></input>

        <button>Add Item</button>
      </form>
    </div>
  );
}
