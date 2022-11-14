// export default connect(mapState, mapDispatch)(List);
import React from "react";
import {connect} from "react-redux";


import List from "../components/List";
import {save, remove} from "../redux/actions";

const mapStateToProps = (state) => ({
    intervals: state.list,
    counter: state.counter.value
})

const mapDispatchToProps = (dispatch) => ({
    save: (payload) => dispatch(save(payload)),
    remove: (payload) => dispatch(remove(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
