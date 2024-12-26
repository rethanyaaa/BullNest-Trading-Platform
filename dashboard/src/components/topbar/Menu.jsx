import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (idx) => {
    setSelectedMenu(idx);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* Logo */}
      <img src="logo.png" style={{ width: "85px" }} alt="Logo" />

      {/* Menu Links */}
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
           
        </ul>
        <hr />

        {/* Profile Section */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar"><i class="fa-solid fa-user"style={{fontSize: "18px"}}></i></div>
          <p className="username">USERID</p>
        </div>

        {/* Dropdown Menu */}
        {isProfileDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>My profile / Settings</li>
              <li>Console</li>
              <li>Coin</li>
              <li>Support</li>
              <li>Invite friends</li>
              <li>Tour Kite</li>
              <li>Keyboard shortcuts</li>
              <li>Help</li>
              <li>
                <Link to="https://bullnest.netlify.app/" style={{ textDecoration: "none" }}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
