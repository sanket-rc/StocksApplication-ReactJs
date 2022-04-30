import React from 'react';
import './App.css';

function About() {


  return (
        <div style={{backgroundColor: 'bisque', marginTop:'40px'}}>
            <div className="container">
              <h1 style={{textDecoration: 'underline'}}>Application Implementation:</h1>
              <ul className="about_List">
                <li>The application is developed using ReactJs.</li>
                <li>The stocks link in navigation bar loads a component where you can enter a stock symbol and get the data for 
                  the entered stock.</li>
                <li>The API used is a <b>TIME_SERIES_WEEKLY</b> API from Alpha Vantage. It gets the weekly data for the entire stock.
                  The API can be replaced by other TIME_SERIES API and the data plotted using the response. 
                </li>
                <li>An auto-suggest is also implented so that user gets to know the appropriate Stock Symbol.</li>
                <li>UserStock link in navigation bar loads the component where user can add stocks to a list and the chart is 
                  updated using the data in the Collection.</li>
              </ul>
            </div>
        </div>
  );
}

export default About;
