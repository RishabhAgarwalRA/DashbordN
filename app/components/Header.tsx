// app/components/Header.tsx
import React from "react";
import "./Header.css"; // Import the CSS for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">DashStack</div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="right-section">
        <div className="notification">
          <span className="icon">🔔</span>
          <span className="notification-count">0</span>
        </div>

        <div className="language-selector">
          <span>English</span>
        </div>

        <div className="user-profile">
          <div className="user-info">
            <span>Rishabh</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
