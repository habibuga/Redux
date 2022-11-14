import {combineReducers} from "redux";

import products from "./products";
import recipes from "./recipes";

const reducer = combineReducers({
    products,
    recipes
});

export default reducer;
