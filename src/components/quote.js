export default function Quote() {
  return(
    <div className="QuoteBox" id="quote-box">

      <div className="QuoteText">
        <p id="text">Placeholder for really awesome quote!</p>
        <p id="author">-Famous Speak Gooder</p>        
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