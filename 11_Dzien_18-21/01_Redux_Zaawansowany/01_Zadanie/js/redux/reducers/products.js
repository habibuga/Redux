import {ADD_PRODUCT} from "../actions/products";

const initialState = [
    { id: 1, name: "Pomidory" },
    { id: 2, name: "Przyprawa curry" },
    { id: 3, name: "Olej" },
    { id: 4, name: "Wołowina 500g" },
    { id: 5, name: "Ziemniaki" },
    { id: 6, name: "Pomidory" },
    { id: 7, name: "Przyprawa curry" },
];

const products = (state=initialState, {type, payload}) => {
    switch(type) {
        case ADD_PRODUCT: {
            return [...state, {id: state.length > 0 ? state[state.length-1].id + 1 : 1,
                name: payload.name}];
        }
        default: {
            return state
        }
    }
}

export default products;
