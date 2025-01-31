// components/Favorites.tsx
import React from "react";
import "./Favorites.css";

const FavoritesPage = ({ favorites }: { favorites: number[] }) => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "link_to_image_1" },
    { id: 2, name: "Product 2", price: 19.99, image: "link_to_image_2" },
    { id: 3, name: "Product 3", price: 39.99, image: "link_to_image_3" },
  ];

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      <div className="favorites-grid">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button>Remove from Favorites</button>
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
