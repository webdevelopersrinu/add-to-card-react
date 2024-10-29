import React, { useContext } from "react";
import { cardContext } from "../context/cardContext";

function Producte({ productId, title, price }) {
  const { addToCard, cardItems } = useContext(cardContext);
  const cardById = cardItems.find((item) => item.productId === productId);
  let producteQuntity = 0;
  if (cardById) {
    producteQuntity = cardById.quntity * cardById.price;
  }
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div>${price}</div>
      <div className="card_btns">
        <button onClick={() => addToCard({ productId, title, price })}>
          add to card{" "}
          {producteQuntity > 0 ? <> ({producteQuntity})</> : null}
        </button>
        <button>buy now</button>
      </div>
    </div>
  );
}

export default Producte;
