import {ADD_RECIPE} from "../actions/recipes";

const initialState = [
    {
        id: 1,
        name: "Pomidorówka",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [1, 2, 3]
    },
    {
        id: 2,
        name: "Schabowy z ziemniakami i surówką",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [3, 1]
    },
    {
        id: 3,
        name: "Pierogi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6]
    }
];

const recipes = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_RECIPE: {
            return [...state, {id: state.length > 0 ? state[state.length-1].id + 1 : 1,
            name: payload.name, desc: payload.desc, products: payload.products}]
        }
        default: {
            return state
        }
    }
}

export default recipes;