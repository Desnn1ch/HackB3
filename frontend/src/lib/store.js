import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './slices/pages/pagesSlice.js'

export const makeStore = () => {
    return configureStore({
      reducer: {
        pages: pagesReducer
      }
    })
}