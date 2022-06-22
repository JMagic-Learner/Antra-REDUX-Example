import { createSlice } from '@reduxjs/toolkit'

export const BuyStockSlice = createSlice({
  name: 'stock',
  initialState: {
    value: 0
  },
  reducers: {
    increaseStock: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 2
      console.log(state.value)
    },
    decreaseStock: state => {
      state.value -= 2
      console.log(state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      console.log(state.value)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increaseStock, decreaseStock, incrementByAmount } = BuyStockSlice.actions

export default BuyStockSlice.reducer