import {connect} from "react-redux";

import Recipes from "../components/Recipes";

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(Recipes);
