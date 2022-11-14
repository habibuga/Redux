import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
} from 'react-router-dom';

import Layout from "./Layout";

import store from "../redux/store";

// Home path="/"
import Home from '../containers/Home';
// Products path="/products"
import Products from '../containers/Products';
// AddProduct path="/products/add"
import AddProduct from '../containers/AddProducts';
import Recipes from '../containers/Recipes';
import AddRecipe from "../containers/AddRecipe";

const Main = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products/" component={Products} />
                        <Route exact path="/recipes/" component={Recipes} />
                        <Route exact path="/products/add" component={AddProduct} />
                        <Route exact path="/recipes/add" component={AddRecipe} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    )
};

export default Main;
