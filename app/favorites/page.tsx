// app/favorites/page.tsx
"use client"; // This line ensures it's a client component

import React, { useState } from "react";

const FavoritesPage: React.FC = () => {
  const [showFavorites, setShowFavorites] = useState(false); // State for visibility

  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev); // Toggle visibility
  };

  return (
    <div>
      <h1>Favorites Page</h1>
      <button onClick={toggleFavorites}>
        {showFavorites ? "Hide Favorites" : "Show Favorites"}
      </button>
      {showFavorites && (
        <div>
          <h2>Favorite Products</h2>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            {/* Add more favorite products here */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
