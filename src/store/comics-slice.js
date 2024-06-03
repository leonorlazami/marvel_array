import { createSlice } from "@reduxjs/toolkit";


const comicSlice = createSlice({
    name: "comicData",
    initialState: {
        comics: [],
    }
})