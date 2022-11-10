// reducers/selectors.js

// Selektor wybierający ostatnich 5 produktów
export const last5Products = (state) => {
    return state.slice(-5).reverse();
}
