// app/page.tsx
import React from "react";
import SalesChart from "./components/SalesChart"; // This path is likely correct
import Header from "./components/Header"; // Importing the Header component

const Home: React.FC = () => {
  return (
    <div>
      <Header /> {/* Integrating the Header component */}
      <h1 className="dashboard-title">Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="card">
          <h3>Total User</h3>
          <h1>40,689</h1>
          <p>8.5% Up from yesterday</p>
        </div>
        <div className="card">
          <h3>Total Order</h3>
          <h1>10,293</h1>
          <p>1.3% Up from past week</p>
        </div>
        <div className="card">
          <h3>Total Sales</h3>
          <h1>$89,000</h1>
          <p>4.3% Down from yesterday</p>
        </div>
        <div className="card">
          <h3>Total Pending</h3>
          <h1>2,040</h1>
          <p>1.8% Up from yesterday</p>
        </div>
      </div>
      <div className="chart-container">
        <h3>Sales Details</h3>
        <SalesChart />
      </div>
    </div>
  );
};

export default Home;
