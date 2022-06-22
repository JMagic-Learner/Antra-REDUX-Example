import React, { useContext } from 'react';
import { useCounterStock } from '../hooks/useCounterStock'

export const StockContext = React.createContext(null);

export const withStockContext = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        static contextType = StockContext;
        render() {
            const [stock, buyStock, sellStock, setStockOption] = this.context;
            return <WrappedComponent {...this.props} stock={stock} buyStock={buyStock} sellStock={sellStock} setStockOption={setStockOption} />
        }
    }
}

export const useStockContext = () => {
    return useContext(StockContext);
}

export const StockContextProvider = (props) => {
    const [
        stock,
        buyStock,
        sellStock,
        setStockOption
    ] = useCounterStock()

    return <StockContext.Provider value={[
        stock,
       buyStock,
        sellStock,
        setStockOption
    ]}>
        {props.children}
    </StockContext.Provider>
}