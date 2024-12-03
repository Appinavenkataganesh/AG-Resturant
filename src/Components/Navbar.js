import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    navigation('/table')
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container43">
        <div className="title">
          <h1>
            <i className="fa-solid fa-utensils"></i> AG Restaurant
          </h1>
        </div>
        <div className="flex603">
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <div className={`menu-content ${isOpen ? 'active10' : ''}`}>
            <nav className="navigation8">
              <Link to="/" className="nav-link8" onClick={closeMenu}>
                HOME
              </Link>
              <Link to="/about" className="nav-link8" onClick={closeMenu}>
                ABOUT
              </Link>
              <Link to="/service" className="nav-link8" onClick={closeMenu}>
                SERVICE
              </Link>
              <Link to="/menu" className="nav-link8" onClick={closeMenu}>
                MENU
              </Link>
              <Link to="/contact" className="nav-link8" onClick={closeMenu}>
                CONTACT
              </Link>
              <form onSubmit={closeMenu}>
                <button className="buttinnav">BOOK A TABLE</button>
              </form>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
