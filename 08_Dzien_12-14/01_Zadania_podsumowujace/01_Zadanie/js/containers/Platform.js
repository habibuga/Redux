import React from "react";
import {connect} from "react-redux";

import {deploy} from "../redux/actions";
import Platform from "../components/Platform";


const mapStateToProps = (state) => ({
    launched: state.rocket.launched,
    counter: state.rocket.counter,
});

const mapDispatchToProps = (dispatch) => ({
    deploy: () => dispatch(deploy()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
