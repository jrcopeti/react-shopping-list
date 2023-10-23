export default function ListItem({
  item,
  onFormatCurrency,
  onToggleItem,
  onDeleteItem,
}) {
  const itemClass = item.bought ? "line-through checked" : "line-through";
  return (
    <li>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggleItem(item.id)}
      ></input>

      <span className={itemClass}>
        {item.quantity} {item.name} {onFormatCurrency(item.price)}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>X</button>
    </li>
  );
}
