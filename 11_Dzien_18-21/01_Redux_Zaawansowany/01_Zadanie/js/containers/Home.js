// containers/Home.js

// connect
import { connect } from "react-redux";

// Products (komponent)
import Home from '../components/Home';

import {last5Products} from "../redux/reducers/selectors";

// mapStateToProps
const mapStateToProps = (state) => ({
    products: last5Products(state.products),
});

// export
export default connect(mapStateToProps)(Home);