export default function ListItem({ item, onFormatCurrency }) {
  return (
    <li>
      <span>
        {item.quantity} {item.name} {onFormatCurrency(item.price)}
      </span>
    </li>
  );
}
