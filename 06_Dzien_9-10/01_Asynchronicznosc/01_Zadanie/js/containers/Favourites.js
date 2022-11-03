import React from "react";
import {connect} from "react-redux";

import Favourites from "../components/Favourites";

// quote
const mapStateToProps = (state) => ({
    quotes: state.favourites,
});

export default connect(mapStateToProps)(Favourites);
