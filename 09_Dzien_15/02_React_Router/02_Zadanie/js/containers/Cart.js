// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);

import { connect } from 'react-redux';

import { addProduct, removeProduct } from '../redux/actions';

import Cart from '../components/Cart';

import {selectProducts, sum} from "../redux/selectors";

const mapStateToProps = (state, ownProps) => ({
    products: selectProducts(state, ownProps.match.params.limit),
    sum: sum(state, ownProps.match.params.limit)
});

const mapDispatchToProps = (dispatch) => ({
    addProduct: (payload) => dispatch(addProduct(payload)),
    removeProduct: (payload) => dispatch(removeProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

