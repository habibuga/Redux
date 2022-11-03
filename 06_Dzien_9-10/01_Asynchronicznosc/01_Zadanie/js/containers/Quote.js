import React from "react";
import {connect} from "react-redux";

import {fetchQuote, addFavourite} from "../redux/actions";
import Quote from "../components/Quote";

// quote, loading, error
const mapStateToProps = (state) => ({
    quote: state.quote.quote,
    loading: state.quote.loading,
    error: state.quote.error,
});

// fetchQuote
const mapDispatchToProps = (dispatch) => ({
    fetchQuote: () => dispatch(fetchQuote()),
    addFavourite: (payload) => dispatch(addFavourite(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
