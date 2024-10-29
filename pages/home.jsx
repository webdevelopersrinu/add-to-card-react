import React from "react";
import Producte from "../components/producte";
import { products } from "../productes";

function Home() {
  return (
    <div className="card-section">
      {products.map((item) => {
        const { title, id, price } = item;
        return <Producte key={id} productId={id} title={title} price={price} />;
      })}
    </div>
  );
}

export default Home;
