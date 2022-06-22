import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterContext = React.createContext(null)

export const CounterContextProvider = (props) => {
    const [
        counter,
        increment,
        decrement,
        setOption
    ] = useCounter()

    return <CounterContext.Provider value={{ 
        counter,
        increment,
        decrement,
        setOption}}>
        {props.children}
    </CounterContext.Provider>
}