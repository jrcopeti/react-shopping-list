export default function ListItem({item}) {
  return (
    <li>
      <span>{item.quantity} {item.name}</span>
    </li>
  )
}
