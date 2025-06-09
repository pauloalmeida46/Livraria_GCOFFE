import React from "react";
import ProductCard from "./CardProduto";

export default function Catalog({ title, products }) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="catalog">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
