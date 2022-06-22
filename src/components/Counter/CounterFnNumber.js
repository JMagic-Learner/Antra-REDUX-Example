import React from 'react';
import { withCounterContext } from '../../context/counterContext';
import { withCounter } from '../../hoc/withCounter'
import { useSelector, useDispatch } from 'react-redux'
const CounterFnNumber = () => {
   
    const count = useSelector(state => state.counter.value)
    return <span>{count}</span>
    
}

export default CounterFnNumber