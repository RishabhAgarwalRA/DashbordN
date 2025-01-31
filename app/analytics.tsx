// analytics.tsx
import React from "react";
import Layout from "./layout";

const Analytics: React.FC = () => {
  return (
    <Layout>
      <h1>Analytics</h1>
      <div className="card">
        <h2>Analytics Overview</h2>
        <p>Graph and metrics will go here.</p>
      </div>
      <div className="graph">Graph Placeholder</div>
    </Layout>
  );
};

export default Analytics;
