import { useState, useEffect } from "react";

import './App.css';
import Quote from './components/quote';

function App() {
  const [quotes, setQuotes] = useState(''); 

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNumber]);
    });
    
  };

  useEffect(() => {
    getQuote();
  }, []);

  window.addEventListener("load", function() {
    let button = document.querySelector("button");

    button.addEventListener("click", function() {
      getQuote();
    });
  });

  

  return (
    <div className="App container-fluid">
      <div className="wrapper">
        <Quote quotes={quotes}/>
        <small>by ha-x-3 <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/61636/quote">Quote</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></small>
      </div>
    </div>
  );
}


export default App;
