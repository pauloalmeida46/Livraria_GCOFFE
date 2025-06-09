import React from "react";
import Header from "./components/Header";
import Catalog from "./components/Catalogo";
import coffeeProducts from "./data/ProdutosCafe";
import comicProducts from "./data/ProdutosGeek";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog title="☕ Cafeteria" products={coffeeProducts} />
      <Catalog title="📚 Loja de Quadrinhos" products={comicProducts} />
    </div>
  );
}

export default App;
