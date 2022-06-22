import React from 'react';
import { withStockContext } from '../../context/stockContext';
import { withCounter } from '../../hoc/withCounter'

class BuyStockNumber extends React.Component {
    render() {
        console.log("BuyStockNumber props", this.props)
        return <span>{this.props.stock}</span>
    }
}

const StockNumberContainer = withStockContext(BuyStockNumber);

export default StockNumberContainer