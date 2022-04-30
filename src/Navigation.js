import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navigation() {

    const navStyles = {
        color: 'white'
    }

  return (
        <nav>
            <h1>Welcome to the Stocks Application</h1>
            <ul className="nav-links">
                <Link className="navLinks" style={navStyles} to="/about">
                    <li>About</li>
                </Link>
                <Link className="navLinks" style={navStyles} to="/StockApi">
                    <li>Stocks</li>
                </Link>
                <Link className="navLinks" style={navStyles} to="/userStock">
                    <li>UserStock</li>
                </Link>
            </ul>
        </nav>
  );
}

export default Navigation;
