
export default function ListItem({
  item,
  onFormatCurrency,
  onToggleItem,
  onDeleteItem,
}) {
  const itemClass = item.bought ? "line-through checked" : "line-through";
  return (
    <li>
      <button onClick={() => onDeleteItem(item.id)}>X</button>

      {item.price === 0 ?  <span className={itemClass}>
        {item.quantity} {item.name}</span> :  <span className={itemClass}>
        {item.quantity} {item.name} {onFormatCurrency(item.price)}
      </span> }

      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggleItem(item.id)}
      ></input>

    </li>
  );
}
