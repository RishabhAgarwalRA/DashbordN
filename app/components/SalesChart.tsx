// app/components/SalesChart.tsx
import React from "react";
import "./SalesChart.css"; // Importing the CSS file

const data = [
  { name: "Week 1", sales: 3000 },
  { name: "Week 2", sales: 4000 },
  { name: "Week 3", sales: 2000 },
  { name: "Week 4", sales: 2780 },
  { name: "Week 5", sales: 3908 },
  { name: "Week 6", sales: 2900 },
  { name: "Week 7", sales: 3600 },
  { name: "Week 8", sales: 4500 },
  { name: "Week 9", sales: 3800 },
  { name: "Week 10", sales: 7000 },
];

const SalesChart: React.FC = () => {
  const maxSales = Math.max(...data.map((d) => d.sales));

  return (
    <div className="chart-container">
      <h3>Sales Details</h3>
      <div className="chart">
        {data.map((point, index) => (
          <div
            key={index}
            className="chart-point"
            style={{
              height: `${(point.sales / maxSales) * 100}%`,
              left: `${index * (100 / (data.length - 1))}%`, // Adjust position based on data points
            }}
          >
            <div className="tooltip">{point.sales}</div>
          </div>
        ))}
      </div>
      <div className="x-axis">
        {data.map((point, index) => (
          <div key={index} className="x-axis-label">
            {point.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
