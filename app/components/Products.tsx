// components/Products.tsx
import React, { useState } from "react";
import "./Products.css";

const ProductsPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "link_to_image_1" },
    { id: 2, name: "Product 2", price: 19.99, image: "link_to_image_2" },
    { id: 3, name: "Product 3", price: 39.99, image: "link_to_image_3" },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => toggleFavorite(product.id)}>
              {favorites.includes(product.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
