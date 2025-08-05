import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";
import { errorReducer } from "./errorReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";

const user = localStorage.getItem("auth")
    ?JSON.parse(localStorage.getItem("auth"))
    : [];

//Fetching cartItems form localStorage
const cartItems = localStorage.getItem("cartItems")
    ?JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
    auth: { user: user},
    carts: { cart: cartItems },
};

export const store = configureStore({
    reducer: {
         products: productReducer,
         errors: errorReducer,
         carts: cartReducer,
         auth: authReducer
    },
    preloadedState: initialState,
});

export default store;