import './App.css';
import Stock from './Stock.js';
import Form from './Form.js';
import { useState } from 'react';

function RealStockApi() {

  const [data, setData] = useState('FB');
  
  const getData = (childdata) => {
    setData(childdata);
  }

  return (
    <div>
      <h1>Stocks API HOME!</h1>
      <Form onSubmit={getData}></Form>
      <Stock StockSymbol={data}/>
    </div>
  );
}

export default RealStockApi;
