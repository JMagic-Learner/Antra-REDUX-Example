import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/CounterSlice.js'
import stockReducer from '../components/BuyStock/BuyStockNumber.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})