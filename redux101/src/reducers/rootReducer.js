// This is the root reducer. It is the store manager for all the reducers.
// To make a root reducer:
// 1. Get a method from redux, called combineReducers
import { combineReducers } from "redux";
// 2. get each individual reducer
import frozenReducer from "./frozenReducer";
import produceReducer from "./produceReducer";
import meatReducer from "./meatReducer";

// 3. call combineReducers and hand it an object
// each key in combineReducers will be a piece of state in the redux store
// each value will be the value of that piece of state in the redux store

const rootReducer = combineReducers({
    frozen: frozenReducer,
    produce: produceReducer,
    meat: meatReducer
})

export default rootReducer;