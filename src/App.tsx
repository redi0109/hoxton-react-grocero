import { useState } from "react";

import "./App.css";


function App() {

  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.45,
      stock: 8,
      inCart: 3,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.15,
      stock: 5,
      inCart: 5,
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      stock: 3,
      inCart: 1,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.35,
      stock: 4,
      inCart: 0,
    },
    {
      id: 5,
      name: "avocado",
      price: 0.14,
      stock: 9,
      inCart: 1,
    },
    {
      id: 6,
      name: "bananas",
      price: 0.23,
      stock: 1,
      inCart: 0,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.17,
      stock: 7,
      inCart: 3,
    },
    {
      id: 8,
      name: "berry",
      price: 0.1,
      stock: 6,
      inCart: 0,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.25,
      stock: 12,
      inCart: 0,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.12,
      stock: 1,
      inCart: 2,
    },
  ]);

  const [count, setCount] = useState(0);

  function getItemImage(item: any)  {
    let id = String(item.id).padStart(3, '0')
    return `assets/icons/${id}-${item.name}.svg`
  }


  function getCartItems() {
    return store.filter((item) => item.inCart > 0);
  }

  const cartItems = getCartItems();

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          {store.map((item) => (
            <li>
              <div className=".store--item-icon">
                <img src={getItemImage(item)} />
              </div>
              <button>Add to cart ({item.stock})</button>
            </li>
          ))}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((item) => (
            <li>
              <img
                className="cart--item-icon"
                src={getItemImage(item)}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">{item.inCart}</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
          ))}
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">
              {}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
function getItemImage(): string | undefined {
  throw new Error("Function not implemented.");
}
