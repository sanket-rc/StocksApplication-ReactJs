import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        StockSymbol: this.props.StockSymbol,
        stockChartXValues: [],
        stockChartYValues: []
      }
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {this.fetchStock()},5000);
  }

  componentWillUnmount() {
      clearInterval(this.myInterval);
  }

  componentDidUpdate(prevProps) {
      if (prevProps.StockSymbol !== this.props.StockSymbol){
        this.fetchStock();
      }
  }

  fetchStock() {
    const pointerToThis = this;
    const API_KEY = 'ANJ8UA4HY4C32PHW';
    let StockSymbol = this.props.StockSymbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${StockSymbol}&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {

          for (var key in data['Weekly Time Series']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Weekly Time Series'][key]['1. open']);
          }
            pointerToThis.setState({
              stockChartXValues: stockChartXValuesFunction,
              stockChartYValues: stockChartYValuesFunction
            });
        }
      )
  }


  render() {
    return (
      <div className="stockApiClass">
        <h1>Stock Symbol : {this.props.StockSymbol}</h1>
        <h2>Current Stock Price : {this.state.stockChartYValues[0]}</h2>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'blue'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'Stocks Data Plot'}}
        />  
      </div>
    )
  }
}

export default Stock;