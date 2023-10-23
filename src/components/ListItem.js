export default function ListItem({
  item,
  onFormatCurrency,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.bought}
        onChange={() => onToggleItem(item.id)}
      ></input>

      <span style={item.bought ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name} {onFormatCurrency(item.price)}
      </span>
      
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </li>
  );
}
