import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

export default function AddItemForm({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handlePriceChange(e) {
    const onlyNumbers = e.target.value.replace(/[^0-9.,]/g, "");
    console.log(onlyNumbers);
    const normalizedInput = onlyNumbers.replace(/,/g, ".");
    setPrice(normalizedInput);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      alert("Please write any item");
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
          id="item-input"
          type="text"
          maxLength="25"
          placeholder="item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          id="price-input"
          type="text"
          placeholder="price (optional)"
          value={price}
          onChange={handlePriceChange}
        ></input>
        <button id="add-button"><HiShoppingCart />+</button>

      </form>
    </div>
  );
}
