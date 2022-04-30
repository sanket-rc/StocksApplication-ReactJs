import React from 'react';
import Plot from 'react-plotly.js';

class UserStockChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: this.props.length,
            stockChartXValues: [],
            stockChartYValues:[]
          }
    }

    componentDidMount(){
      this.getXandYData();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.stocks.length !== this.props.stocks.length){
        this.getXandYData();
      }
    }

    getXandYData() {
        const pointerToThis = this;
        var arrToCopy = this.props.stocks;
        if(arrToCopy == null){
          return null
        }

        let arrToRetX = [];
        for(let i=0; i<arrToCopy.length; i++){
            let obj = {...arrToCopy[i]}
            arrToRetX.push(obj.StockName)
        }

        let arrToRetY = []
        for(let i=0; i<arrToCopy.length; i++){
          let obj = {...arrToCopy[i]}
          arrToRetY.push(obj.StockPrice)
        }

        pointerToThis.setState({
          stockChartXValues: arrToRetX,
          stockChartYValues: arrToRetY
        });
    }


  render() {
    return (
      <Plot className="userStockPlot"
        data={[
          {
            x: this.state.stockChartXValues,
            y: this.state.stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: this.state.stockChartXValues, y: this.state.stockChartYValues},
        ]}
        layout={ {width: 700, height: 500, title: 'User Stock Plot'} }
      />
    );
  }
}

export default UserStockChart;