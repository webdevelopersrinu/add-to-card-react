import React, { useContext } from "react";
import CardProducte from "../components/cardProducte";
import { cardContext } from "../context/cardContext.js";

function Card() {
  const { cardItems } = useContext(cardContext);
  const productesCount = cardItems.reduce((acc, cuu) => {
    return acc + cuu.quntity;
  }, 0);
  const productesPrice = cardItems.reduce((acc, cuur) => {
    return acc + (cuur.quntity * cuur.price);
  }, 0);
  return (
    <div className="card-page">
      <h3>your card items</h3>
      {cardItems.map((item) => {
        const { productId, title, price, quntity } = item;
        return (
          <CardProducte
            key={productId}
            productId={productId}
            title={title}
            price={price}
            quntity={quntity}
          />
        );
      })}

      {productesCount > 0 ? <div>total products {productesCount}</div> : null}
      {productesPrice > 0 ? <div>total products {productesPrice}</div> : null}
    </div>
  );
}

export default Card;
