import ListItem from "./ListItem";

export default function List({ items, onFormatCurrency, onToggleItems }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onFormatCurrency={onFormatCurrency}
          onToggleItem={onToggleItems}
        />
      ))}
    </ul>
  );
}
