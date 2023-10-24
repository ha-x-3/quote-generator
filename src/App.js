import { useState, useEffect } from "react";

import './App.css';
import Quote from './components/quote';

function App() {
  const [quotes, setQuotes] = useState(''); 

  const getQuote =  () => {
   fetch('quoteData.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
   )  // "https://type.fit/api/quotes"
    .then(res => res.json())
    .then(data => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNumber]);
    });
    
  };

  useEffect(() => {
    getQuote();
  }, []);

  let colors = [
    '#343A40',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ]

  let color;
  function getColor(colors) {
    let randomNumber = Math.floor(Math.random() * colors.length);
    color = colors[randomNumber]
    return color;
  }

  window.addEventListener("load", function() {
    let button = document.querySelector("button");

    button.addEventListener("click", function() {
      getQuote();
      getColor(colors);
      document.body.style.backgroundColor = color;
      const button = document.querySelector("#new-quote");
      button.style.backgroundColor = color;
      button.style.borderColor = color;
      const tweetImg = document.querySelector("#tweet-quote");
      const facebookImg = document.querySelector("#facebook-quote");
      tweetImg.style.backgroundColor = color;
      tweetImg.style.borderColor = color;
      facebookImg.style.backgroundColor = color;
      facebookImg.style.borderColor = color;
    });

    button.addEventListener("mousedown", function() {
      getQuote();
      getColor(colors);
      document.body.style.backgroundColor = color;
      const button = document.querySelector("#new-quote");
      button.style.backgroundColor = color;
      button.style.borderColor = color;
      const tweetImg = document.querySelector("#tweet-quote");
      const facebookImg = document.querySelector("#facebook-quote");
      tweetImg.style.backgroundColor = color;
      tweetImg.style.borderColor = color;
      facebookImg.style.backgroundColor = color;
      facebookImg.style.borderColor = color;
    });
  });

  

  return (
    <div className="App container-fluid">
      <div className="wrapper">
        <Quote quotes={quotes}/>
        <small>by ha-x-3 - <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/61636/quote">Quote</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></small>
      </div>
    </div>
  );
}


export default App;
