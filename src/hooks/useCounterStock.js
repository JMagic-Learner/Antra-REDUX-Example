import React from 'react'

export const useCounterStock = (initOption = {
    initCounter: 0,
    incrementNum: 1,
    decrementNum: 1
}) => {
    const [stock, setStock] = React.useState(initOption.initCounter);
    const [option, setStockOption] = React.useState(initOption)

    const stockIncrease = () => {
        setStock(stock + option.incrementNum)
   
    }
    const stockDecrease = () => {
        setStock(stock - option.decrementNum)
      
    }

    const handleStockOption = (newOption) => {
        setStock(newOption.initCounter);
        setStockOption(newOption)
    }

    return [
        stock,
        stockIncrease,
        stockDecrease,
        handleStockOption
    ]
}