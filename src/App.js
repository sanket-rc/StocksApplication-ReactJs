import React, { Fragment } from 'react';
import './App.css';
import Nav from './Navigation.js';
import StockApi from './ReakStockApi.js';
import About from './About.js';
import UserStock from './UserStock.js';
import Home from './Homepage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
      <div>
        <Router>
          <Fragment>
            <Nav/>
            <Routes>
              <Route exact path='*' element={<Home/>}/>
              <Route exact path='/StockApi' element={<StockApi/>}/>
              <Route exact path='/userStock' element={<UserStock/>}/>
              <Route exact path='/about' element={<About/>}/>
            </Routes>
          </Fragment>
        </Router>
      </div>
  );
}

export default App;
