import { getItemImage, StoreItemType } from "../App"

type Props = {
    store: StoreItemType[]
    increaseQuantity: (item: StoreItemType) => void
}


export function Store ({ store , increaseQuantity } : Props) {
    return (
        <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          {store.map((item : StoreItemType) => (
            <li>
              <div className=".store--item-icon">
                <img src={getItemImage(item)} />
              </div>
              <button onClick={() => increaseQuantity(item)}>
                Add to cart ({item.stock})
              </button>
            </li>
          ))}
        </ul>
      </header>
    )
}