import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: -2 };

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: initialState,
    reducers: {
        changePage(state, action) {
            if (state.value != action.payload) state.page = action.payload;
        }
    }
});

export const { changePage } = pagesSlice.actions;
export default pagesSlice.reducer