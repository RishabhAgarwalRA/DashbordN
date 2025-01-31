// app/products/page.tsx
"use client"; // This line ensures it's a client component

import React, { useState } from "react";

const ProductsPage: React.FC = () => {
  const [showProducts, setShowProducts] = useState(false); // State for visibility

  const toggleProducts = () => {
    setShowProducts((prev) => !prev); // Toggle visibility
  };

  return (
    <div>
      <h1>Products Page</h1>
      <button onClick={toggleProducts}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>
      {showProducts && (
        <div>
          <h2>Product Information</h2>
          <p>Here is some information about the products.</p>
          {/* More product details can be added here */}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
