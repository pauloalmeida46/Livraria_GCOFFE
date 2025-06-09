import React from "react";

export default function ProductCard({ name, description, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
}
