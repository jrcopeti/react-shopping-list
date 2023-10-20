export default function Status({ items, onFormatCurrency }) {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <p>Total Items: {totalQuantity}</p>
      <p> Total price: {totalPrice} </p>
    </div>
  );
}
