const ADD_RECIPE = "ADD_RECIPE";

const addRecipe = (payload) => ({
    type: ADD_RECIPE,
    payload: payload
});

export {ADD_RECIPE, addRecipe};
