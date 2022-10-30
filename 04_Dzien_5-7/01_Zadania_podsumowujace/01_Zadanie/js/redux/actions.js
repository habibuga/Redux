const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_PRODUCT = "ADD_PRODUCT";
const CHANGE_ORDER = "CHANGE_ORDER";

const increment = () => ({
    type: INCREMENT
});

const decrement = () => ({
    type: DECREMENT
});

const addProduct = (item) => ({
    type: ADD_PRODUCT,
    item: item
});

const changeOrder = (posChange, curPos) => ({
    type: CHANGE_ORDER,
    posChange: posChange,
    curPos: curPos
});

export {
  INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER,
  increment, decrement, addProduct, changeOrder
};
