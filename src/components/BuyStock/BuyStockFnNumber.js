import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const BuyStockFnNumber = () => {
   
    const stockAmount = useSelector(state => state.counter.value)
    return <span>{stockAmount}</span>
    
}

export default BuyStockFnNumber