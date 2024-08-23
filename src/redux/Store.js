import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import categorySlice from "./slices/categorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store=configureStore({
    reducer:{
        cart:CartSlice,
        category:categorySlice,
        search:SearchSlice,
    },
});

export default Store;