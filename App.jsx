import React, { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Card from "./pages/card";
import Home from "./pages/home";
import NavBar from "./components/navBar";
import { cardContext } from "./context/cardContext";

function App() {
  const { cardItems } = useContext(cardContext);
  const productesCount = cardItems.reduce((accu, cuur) => {
    return accu + cuur.quntity;
  }, 0);
  return (
    <div>
      <NavBar productesCount={productesCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
