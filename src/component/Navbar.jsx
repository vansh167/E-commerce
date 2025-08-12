import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaBox, FaUser, FaGlobe, FaSearch } from 'react-icons/fa';
import '../style/Navbar.css';

const Navbar = ({ cartItemCount }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menu, setMenu] = useState("shop");
  const [language, setLanguage] = useState("EN");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // You can redirect to a search page or trigger a search result here
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-section logo-container">
        <img src="/image/logo1.png" alt="ShopEase Logo" className="logo-img" />
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-section center-links">
        <Link to="/" className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>Shop</Link>
        <Link to="/mens" className={menu === "mens" ? "active" : ""} onClick={() => setMenu("mens")}>Men</Link>
        <Link to="/womens" className={menu === "womens" ? "active" : ""} onClick={() => setMenu("womens")}>Women</Link>
        <Link to="/kids" className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}>Kids</Link>
      </div>

      {/* Search Bar */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>

      {/* Right: Icons */}
      <div className="navbar-section right-icons">
        {/* Heart */}
        <Link to="/hert" className="heart-link">
          <img src="/image/heart.png" className="heart-img" alt="Wishlist" />
        </Link>

        {/* Cart */}
        <Link to="/cart" className="cart-link">
          <img src="/image/cart.png" className="cart-img" alt="Cart" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>

        {/* Language Selector */}
        <div className="language-dropdown">
          <div className="language-trigger">
            <FaGlobe size={16} />
            {language}
            <span className="arrow-down">▾</span>
          </div>
          <div className="language-options">
            <div onClick={() => setLanguage("EN")}>🇺🇸 EN</div>
            <div onClick={() => setLanguage("FR")}>🇫🇷 FR</div>
            <div onClick={() => setLanguage("DE")}>🇩🇪 DE</div>
            <div onClick={() => setLanguage("ES")}>🇪🇸 ES</div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="profile-container">
          <img
            src="/image/user.png"
            className="profile-img"
            alt="User Profile"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" onClick={closeDropdown}><FaUser /> My Profile</Link>
              <Link to="/orders" onClick={closeDropdown}><FaBox /> My Orders</Link>
              <Link to="/logout" onClick={closeDropdown}><FaSignOutAlt /> Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
