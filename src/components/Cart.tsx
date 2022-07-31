import { getItemImage } from "../App"

export function Cart ({cartItems, totalPrice, increaseQuantity, decreaseQuantity, getTotalPrice}) {
    return (
        <main id="cart">
<h2>Your Cart</h2>

<div className="cart--item-list-container">
  <ul className="item-list cart--item-list">
    {cartItems.map((item : )  => (
      <li>
        <img
          className="cart--item-icon"
          src={getItemImage(item)}
          alt={item.name}
        />
        <p>{item.name}</p>
        <button
          onClick={() => decreaseQuantity(item)}
          className="quantity-btn remove-btn center"
        >
          -
        </button>
        <span className="quantity-text center">{item.inCart}</span>
        <button
          onClick={() => increaseQuantity(item)}
          className="quantity-btn add-btn center"
        >
          +
        </button>
      </li>
    ))}
  </ul>
</div>

<div className="total-section">
  <div>
    <h3>Total</h3>
  </div>

  <div>
    <span className="total-number">{getTotalPrice().toFixed(2)}</span>
  </div>
</div>
</main>
    )
}

