import React from "react";

const Favourites = ({quotes}) => (
    <>
        <h1>Favourites</h1>
        <ul>
            {quotes.map((quote, index) => {
                return <li key={index}>{quote.quote} - {quote.author}</li>
            })}
        </ul>
    </>
);

export default Favourites;

//
// Favourites.propTypes = {
//   quotes: PropTypes.array.isRequired
// };
//
// export default Favourites;
