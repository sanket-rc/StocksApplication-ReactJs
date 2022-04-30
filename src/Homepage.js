import './App.css';
import React from 'react';
import StockImg from './StocksImage.jpg';

function Homepage() {


  return (
        <div>
            <img className="stockImage" src={StockImg} alt=""/>
        </div>
  );
}

export default Homepage;
