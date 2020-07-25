import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import './App.css';

function App() {
  const url = '/.netlify/functions/quotes';
  const [quote, setQuote] = useState();

  const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data.quote);
    return data;
  }

  useInterval(() => {
    getQuote(); 
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {quote}
        </p>
      </header>
    </div>
  );
}

export default App;
