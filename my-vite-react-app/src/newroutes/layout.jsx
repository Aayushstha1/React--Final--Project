import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navLinkStyles = ({ isActive }) =>
    `transition-colors duration-200 hover:text-blue-100 px-3 py-2 rounded-lg ${
      isActive ? "bg-blue-700 text-white" : "text-blue-100"
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-blue-200">Shop</span>Hub
              </h1>
            </div>
            
            <ul className="flex items-center space-x-4">
              <li>
                <NavLink to="/" className={navLinkStyles}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={navLinkStyles}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkStyles}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactus" className={navLinkStyles}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={navLinkStyles}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/CartPage" 
                  className={({ isActive }) =>
                    `flex items-center gap-1 ${navLinkStyles({ isActive })}`
                  }
                >
                  
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer >
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
