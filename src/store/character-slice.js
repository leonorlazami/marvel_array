import { createSlice } from "@reduxjs/toolkit";


const characterSlice = createSlice({
    name: 'characterData',
    initialState: {
        characters: [],
    },
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setCharacters(state, action) {
            state.characters = action.payload
        }
    }
})


export default characterSlice;
export const characterActions = characterSlice.actions