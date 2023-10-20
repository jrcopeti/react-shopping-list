export default function Status({items, onFormatCurrency}) {


  function total(propName) {
   return items.reduce((sum, item) => sum + item[propName], 0);
  }
  return (
    <div>

      <p>Total Items: {total("quantity")}</p>
     <p> Total price: {onFormatCurrency(total("price"))} </p>
    </div>



  )
}
