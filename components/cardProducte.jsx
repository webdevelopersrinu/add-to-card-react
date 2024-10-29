import React, { useContext } from "react";
import "./cardProducte.css";
import { cardContext } from "../context/cardContext";

function CardProducte({ productId, title, price, quntity }) {
  const { removeToCard, increseQuntity, decreseQuntity } =
    useContext(cardContext);
  return (
    <div className="producte-card">
      <div className="producte-info">
        <h6 className="producte-title">{title}</h6>
        <span>${price}</span>
        <div className="quantity">
          <button onClick={() => decreseQuntity({ productId })}>-</button>
          <span>{quntity}</span>
          <button onClick={() => increseQuntity({ productId })}>+</button>
        </div>
        <div className="total-price">${Math.trunc(quntity * price)}</div>
        <button
          className="remove-to-card"
          onClick={() => removeToCard({ productId })}
        >
          remove to card
        </button>
      </div>
    </div>
  );
}

export default CardProducte;
