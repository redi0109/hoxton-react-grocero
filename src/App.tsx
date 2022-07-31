import { useState } from "react";

import "./App.css";
import { Store } from "./components/Store";
import { Cart } from "./components/Cart";

export function getItemImage(item: any) {
  let id = String(item.id).padStart(3, "0");
  return `assets/icons/${id}-${item.name}.svg`;
}

export type StoreItemType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  inCart: number;
}

export type StoreType = StoreItemType[]

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


  function getCartItems() {
    return store.filter((item) => item.inCart > 0);
  }

  const cartItems = getCartItems();

  function getTotalPrice() {
    let total = 0;

    for (let item of cartItems) {
      total += item.price * item.inCart;
    }
    return total;
  }

  function increaseQuantity(item: any) {
    //funksion qe ndryshon te dhenat ne store
    // 1- krijojme nje kopje te re te te dhenave
    // 2- modifikojme te dhenat tek kopja e krijuar
    // 3- update state

    if (item.stock <= 0) return;
    let newStore = [...store];
    let index = newStore.indexOf(item);
    newStore[index].inCart++;
    setStore(newStore);

    item.stock--;
  }

  function decreaseQuantity(item: any) {
    let newStore = [...store];
    let index = newStore.indexOf(item);
    newStore[index].inCart--;
    setStore(newStore);

    item.stock++;
  }

  return (
    <div className="App">
   
      <Store 
      store = {store}
      increaseQuantity = {increaseQuantity} />

      <Cart
      cartItems = {cartItems}
      totalPrice = {getTotalPrice()}
      increaseQuantity = {increaseQuantity}
      decreaseQuantity = {decreaseQuantity}
      getTotalPrice = {getTotalPrice} />
    </div>
  );
}

export default App;

