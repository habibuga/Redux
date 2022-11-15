import {connect} from "react-redux";

import {addRecipe} from "../redux/actions/recipes";

import AddRecipe from "../components/Recipes/Add";

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    onAddRecipe: (payload) => dispatch(addRecipe(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
