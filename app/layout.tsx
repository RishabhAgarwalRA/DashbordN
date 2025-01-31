// app/layout.tsx
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure that the global styles are imported
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="sidebar">
            <h2>DashStack</h2>
            <nav>
              <Link href="/" className="active">
                Dashboard
              </Link>
              <Link href="/products">Products</Link>
              <Link href="/favorites">Favorites</Link>
              <Link href="/inbox">Inbox</Link> {/* Link for Inbox */}
              <Link href="/order-lists">Order Lists</Link>
              <Link href="/product-stock">Product Stock</Link>
            </nav>
            <h3>Pages</h3>
            <nav>
              <Link href="/pricing">Pricing</Link>
              <Link href="/calendar">Calendar</Link>
              <Link href="/todo">To-Do</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/invoice">Invoice</Link>
              <Link href="/ui-elements">UI Elements</Link>
              <Link href="/team">Team</Link>
              <Link href="/table">Table</Link>
            </nav>
          </div>
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
