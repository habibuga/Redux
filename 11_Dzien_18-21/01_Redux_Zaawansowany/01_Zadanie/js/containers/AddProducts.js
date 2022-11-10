import {connect} from "react-redux";

import {addProduct} from "../redux/actions/products";

import AddProduct from "../components/Products/Add";

const mapDispatchToProps = (dispatch) => ({
    onAddProduct: (payload) => dispatch(addProduct(payload)),
});

export default connect(undefined, mapDispatchToProps)(AddProduct);
