import React from "react";

const Quote = ({quote, loading, error, fetchQuote, addFavourite}) => (
  <div>
    <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
    {quote && <p>{quote.quote} / {quote.author}</p>}
    {loading && "Ładuję cytat..."}
    {error && error}
    <button style={{visibility: quote && !loading  ? 'visible' : 'hidden'}} onClick={() => addFavourite(quote)}>Dodaj do ulubionych</button>
  </div>
);

export default Quote;
