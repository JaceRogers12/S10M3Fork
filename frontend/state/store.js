// ✨ create your `store` in this module
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./quotesSlice.js";

export const store = configureStore({
    reducer: {state: reducer}
})