import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import user from "./user"
import products from "./products";

const reducer = combineReducers({
    user,
    products
})

const store = configureStore({
    reducer
})

export default store