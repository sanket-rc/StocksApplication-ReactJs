import './App.css';
import data from './mock-data.json';
import { nanoid } from "nanoid";
import React, { useState } from 'react';
import UserStockChart from './UserStockChart.js';

function UserStock() {

    const [stockData, setStocks] = useState(data);

    const [addFormData, setAddFormData] = useState({
        StockName: "",
        StockPrice: "",
        LastUpdated: ""
      });
    
    const stylesHeading = {
        fontSize: '32px',
        padding: '10px 0 10px 25px',
        backgroundColor: 'aqua',
        textDecoration: 'underline'
    }
    
    // When any of the field in form is updated.
    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
    };

    // When the form is submitted
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newStock = {
          id: nanoid(),
          StockName: addFormData.StockName,
          StockPrice: addFormData.StockPrice,
          LastUpdated: addFormData.LastUpdated
        };
        const newStocks = [...stockData, newStock];
        setStocks(newStocks);
        
        /*Reset the default when form is submitted*/
        event.target.reset();
    }


  return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Stock Price</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map((stock)=> (
                                        <tr key={stock.id}>
                                            <td>{stock.StockName}</td>
                                            <td>{stock.StockPrice}</td>
                                            <td>{stock.LastUpdated}</td>
                                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 style={stylesHeading}>Add a Stock in the list</h2>

            <form className="userForm" onSubmit={handleAddFormSubmit}>
                <input
                type="text"
                name="StockName"
                required="required"
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
                autoComplete="off"
                />
                <input
                type="text"
                name="StockPrice"
                required="required"
                placeholder="Enter a Price..."
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                onChange={handleAddFormChange}
                autoComplete="off"
                />
                <input
                type="text"
                name="LastUpdated"
                required="required"
                placeholder="Enter a Current Time..."
                onChange={handleAddFormChange}
                autoComplete="off"
                />
                <button type="submit">Add Stock</button>
            </form>
            <UserStockChart stocks={stockData}/>
        </div>
  );
}

export default UserStock;
