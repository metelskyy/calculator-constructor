import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NmState {
  currentValue: Number
  finalValue: Number
}

const initialState: NmState = {
  currentValue: 0,
  finalValue: 0,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<number>) => {
      state.currentValue = action.payload
    },
    getFinalValue: (state, action: PayloadAction<number>) => {
      state.currentValue = action.payload
    },
  },
})
export const { reducer: calculatorReducer, actions: calculatorActions } = calculatorSlice
