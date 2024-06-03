import { configureStore } from "@reduxjs/toolkit";
import characterDataSlice from "./character-slice";


const store = configureStore({
    reducer: { characterData: characterDataSlice.reducer }
})


export default store