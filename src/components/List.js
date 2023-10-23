import { useState } from "react";
import ListItem from "./ListItem";

export default function List({
  items,
  onFormatCurrency,
  onToggleItems,
  onDeleteItems,
  onClearItems,
}) {
  const [sortby, setSortby] = useState("order added")

  let sortedItems

  if (sortby === "order added") sortedItems = items

  if (sortby === "name")
  sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name))

  if(sortby === "price")
  sortedItems = [...items].sort((a, b) => a.price - b.price)

  if(sortby === "items bought")
  sortedItems = [...items].sort((a, b) => Number(b.bought) - Number(a.bought))

  return (
    <div>
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onFormatCurrency={onFormatCurrency}
            onToggleItem={onToggleItems}
            onDeleteItem={onDeleteItems}
          />
        ))}
      </ul>
      <div>
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="order added">Order Added</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="items bought">Items Bought</option>
        </select>
      </div>
      {items.length ? <button onClick={onClearItems}>Clear List</button> : ""}
    </div>
  );
}
