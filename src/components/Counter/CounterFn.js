import React, { useEffect, useContext } from 'react';
import { useCounterContext } from '../../context/counterContext';
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from './CounterSlice.js'
import { useCounter } from '../../hooks/useCounter'
//let counterRef;
const CounterFn = (props) => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const [title, setTitle] = React.useState("CounterFn");
    const [isAlert, setIsAlert] = React.useState(false)
    const [
        counter,
        handleAdd,
        handleSub
    ] = useCounterContext()
    const counterRef = React.useRef(counter)

    counterRef.current = counter;

    console.log("CounterRef =" ,counterRef);

    const hanldeAlertWayTwo = () => {
        setTimeout(() => {
            setIsAlert(true)
        }, 2000)
    }

    useEffect(() => {
        if (isAlert) {
            alert(counter)
            setIsAlert(false)
        }
    }, [isAlert])

    return <section>
        <header>{title}:{count}</header>
        {/* <button onClick={dispatch(increase())} >+</button><button onClick={dispatch(decrease())}>-</button> */}
         <button onClick={() => dispatch(increase())} >+</button><button onClick={() => dispatch(decrease())}>-</button>
        <button onClick={hanldeAlertWayTwo}>Alert after 5 s</button>
    </section>;
}

export default CounterFn;


