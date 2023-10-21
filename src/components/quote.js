const Quote = ({ quotes  }) => {
  return(
    <div className="QuoteBox" id="quote-box">

      <div className="QuoteText">
        <div id="text-line">
          <img src="assets/images/quote.svg" height="50px" alt="Opening Quote"id="quoteImg"></img>
          <div id="text">{quotes.text}</div>
        </div>
        <div id="author">-{quotes.author}</div>        
      </div>

      <div className="buttonBar">
        <div className="socialButtons">
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" className="btn btn-dark">
            <img src="assets/images/twitter-rounded.svg" alt="Twitter Logo" height="34px"></img>
          </a>
          <a id="facebook-quote" href="facebook.com/intent/post" target="_blank" className="btn btn-dark">
            <img src="assets/images/facebook-rounded.svg" alt="Facebook Logo" height="34px"></img>
          </a>
        </div>
        <button id="new-quote" type="button" className="btn btn-dark btn-lg">New Quote</button>
      </div>
      
    </div>
  );
}

export default Quote;

