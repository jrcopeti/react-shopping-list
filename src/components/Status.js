export default function Status({ items, onFormatCurrency }) {
  if (!items.length) return <p>No items on the list</p>;


  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemsBought = items.filter((item) => item.bought).reduce((sum, item) => sum + item.quantity, 0)

const percentage = (itemsBought / totalQuantity) * 100

  return (
    <footer>
      <p>Total Items: {totalQuantity}</p>
      <p>Items bought: {itemsBought}</p>
      <p> Total price: {onFormatCurrency(totalPrice)} </p>
      <p>{percentage === 100 ? <strong>Shopping completed</strong> : `Shopping progress: ${Math.round(percentage)}%`}</p>
    </footer>
  );
}
