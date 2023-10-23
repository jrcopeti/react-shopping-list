export default function Status({ items, onFormatCurrency }) {
  if (!items.length) return <p className="status" id="no-items">No items on the list</p>;


  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemsBought = items.filter((item) => item.bought).reduce((sum, item) => sum + item.quantity, 0)

const percentage = (itemsBought / totalQuantity) * 100

  return (
    <footer className="status">
      <p className="total">Total Items | {totalQuantity}</p>
      <p className="items"> Total price | {onFormatCurrency(totalPrice)} </p>
      <p className="total">Items bought | {itemsBought}</p>
      <p className="items">{percentage === 100 ? <strong>Shopping completed</strong> : `Shopping progress | ${Math.round(percentage)}%`}</p>
    </footer>
  );
}
