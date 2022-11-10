// Akcja dodająca produkt

const ADD_PRODUCT = "ADD_PRODUCT";

const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload: payload
});

export {ADD_PRODUCT, addProduct};
