import ListItem from "./ListItem";

export default function List({ items, onFormatCurrency }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onFormatCurrency={onFormatCurrency}
        />
      ))}
    </ul>
  );
}
