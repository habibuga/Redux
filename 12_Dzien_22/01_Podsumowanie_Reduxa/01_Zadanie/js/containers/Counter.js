// export default connect(mapState, mapDispatch)(Counter)

import React from "react";
import {connect} from "react-redux";

import Counter from "../components/Counter";
import {startCounter, pause, set} from "../redux/actions";

const mapStateToProps = (state, ownProps) => ({
    isCounting: state.counter.isCounting,
    value: state.counter.value,
    initialValue: ownProps.match.params.init,
})

const mapDispatchToProps = (dispatch) => ({
    startCounter: () => dispatch(startCounter()),
    pause: () => dispatch(pause()),
    onSet: (payload) => dispatch(set(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
