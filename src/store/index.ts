import { configureStore } from '@reduxjs/toolkit/dist'
import { calculatorReducer } from './calculator/slice'

export const store = configureStore({
  reducer: { calculator: calculatorReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
