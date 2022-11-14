import { connect } from "react-redux";

import List from '../components/List';

import { save, remove } from '../redux/actions';

const mapStateToProps = (state) => ({
  list: state.list,
  counterValue: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  onSave: (payload) => dispatch(save(payload)),
  onRemove: (payload) => dispatch(remove(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
