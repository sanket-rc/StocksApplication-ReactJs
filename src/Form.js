import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Form(props) {
  const [input, setInputs] = useState("");

  const [inputSuggestion, setInputSuggestion] = useState([]);

  const handleChange = (event) => {
    setInputs(event.target.value);
    fetchStockSuggestion(event.target.value);
  }

  const onSuggestionHandler = (data) => {
    setInputs(data);
    setInputSuggestion([]);
  }

  function fetchStockSuggestion(keyword) {
    const API_KEY = 'ANJ8UA4HY4C32PHW';
    let API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${API_KEY}`;
    let stockSuggestionArray = [];

    if(keyword !== null || keyword !== ""){
      fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          for (var key in data['bestMatches']) {
            stockSuggestionArray.push(data['bestMatches'][key]['1. symbol']);
          }
         setInputSuggestion(stockSuggestionArray);
        }
      )
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter the stock name:
      <input 
        type="text" 
        name="Stockname" 
        placeholder='Search...'
        value={input || ""} 
        onChange={handleChange}
        autoComplete="off" 
      />
      <div className="userSuggestion">
      {inputSuggestion.map((data) => {
        return <p className="usrSuggn" key={data} onClick={()=> onSuggestionHandler(data)}>{data}</p>
        })
      }
      </div>
      </label>
        <input style={{height: 'fit-content'}}type="submit" value="Submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);