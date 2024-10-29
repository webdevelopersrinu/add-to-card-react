import { createContext, useState } from "react";

export const cardContext = createContext();

export function CardContextProvider({ children }) {
  const [cardItems, setCardItems] = useState([]);
  function addToCard(payload) {
    const exsitItemIndex = cardItems.findIndex(
      (item) => item.productId === payload.productId
    );
    if (exsitItemIndex !== -1) {
      const updataCard = cardItems.map((item, i) => {
        if (exsitItemIndex === i) {
          item.quntity += 1;
        }
        return item;
      });
      setCardItems(updataCard);
    } else {
      setCardItems([...cardItems, { ...payload, quntity: 1 }]);
    }
  }
  function removeToCard(payload) {
    const updataCard = cardItems.filter(
      (item) => item.productId !== payload.productId
    );
    setCardItems(updataCard);
  }
  function increseQuntity(payload) {
    const updataCard = cardItems.map((item) => {
      if (item.productId === payload.productId) {
        item.quntity += 1;
      }
      return item;
    });
    setCardItems(updataCard);
  }
  function decreseQuntity(payload) {
    const updataCard = cardItems
      .map((item) => {
        if (item.productId === payload.productId) {
          item.quntity -= 1;
        }
        return item;
      })
      .filter((item) => item.quntity > 0);
    setCardItems(updataCard);
  }
  return (
    <cardContext.Provider
      value={{
        cardItems,
        addToCard,
        removeToCard,
        increseQuntity,
        decreseQuntity,
      }}
    >
      {children}
    </cardContext.Provider>
  );
}
