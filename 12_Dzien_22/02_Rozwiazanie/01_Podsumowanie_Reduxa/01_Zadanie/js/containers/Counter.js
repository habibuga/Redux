import { connect } from "react-redux"

import Counter from '../components/Counter';

import { startCounting, pause, set } from "../redux/actions";

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
  initialValue: ownProps.match.params.init,
});

const mapDispatchToProps = (dispatch) => ({
  onStartCounting: () => dispatch(startCounting()),
  onPause: () => dispatch(pause()),
  onSet: (payload) => dispatch(set(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
