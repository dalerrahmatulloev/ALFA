import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filmsAPI } from '../api/films/films'
import counterSlice from '../reducer/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [filmsAPI.reducerPath]: filmsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsAPI.middleware),
})

setupListeners(store.dispatch)