import { connect } from 'react-redux';

import Articles from '../components/Articles';

import {addArticle, removeArticle} from '../redux/actions';

// users, articles (.getState())
const mapStateToProps = (state) => ({
  users: state.users,
  articles: state.articles,
});

// onAdd (.dispatch())
const mapDispatchToProps = (dispatch) => ({
  onAdd: (payload) => dispatch(addArticle(payload)),
  onRemove: (payload) => dispatch(removeArticle(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
