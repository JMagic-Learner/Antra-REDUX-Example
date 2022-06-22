import React, { useEffect } from 'react'
import { getInitStockInfo } from '../../apis/stock.api'
import { useCounter } from '../../hooks/useCounter'
import { useLoading } from '../../hooks/useLoading'
import { useSelector, useDispatch } from 'react-redux'
import { useStockContext } from '../../context/stockContext'
import { increaseStock,decreaseStock } from './BuyStockSlice.js'

const BuyStockFn = (props) => {
    const count = useSelector(state => state.stock.value)
    console.log(count) 
    const dispatch = useDispatch()
    const [isLoading, startLoading, endLoading, showLoading] = useLoading(false)
    const [
        stockAmount,
        buyStock,
        sellStock,
        setStockOption,
    ] = useStockContext()

    useEffect(() => {
        startLoading()
        getInitStockInfo().then(option => {
            //console.log(option)
            setStockOption(option);
            endLoading()
        })
    }, [])

    

    return <section>
        <h1>How many stock you want to buy</h1>
        {
            isLoading ? showLoading('normal') :
                <>
                    <button onClick={() => dispatch(increaseStock())}>
                        +
                    </button>
                    <span>{stockAmount}</span>
                    <button onClick={() => dispatch(decreaseStock())}>
                        -
                    </button>
                </>
        }
    </section>
}

export default BuyStockFn;