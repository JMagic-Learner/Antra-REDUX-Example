import React from 'react';
import { withCounterContext } from '../../context/counterContext';
import { withCounter } from '../../hoc/withCounter'
import Counter from './CounterClass.js'
import { connect } from 'react-redux';

class CounterNumber extends React.Component {
   
    render() {
        console.log("CounterNumber props", this.props)
        return <span>{this.props.counter}</span>
    }
}

const CounterNumberContainer = withCounterContext(CounterNumber);

export default CounterNumberContainer


