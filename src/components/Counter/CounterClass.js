import React from 'react';
import { withCounter } from "../../hoc/withCounter"
import { increase, decrease } from './CounterSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from "react-redux";


class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "CounterClass"
        }
        this.hanldeAlert = this.hanldeAlert.bind(this);
    }
   

    hanldeAlert() {
        setTimeout(() => {
            alert(this.props.counter)
        }, 5000)
    }
    
    render() {
        console.log('render class compoennt')
        console.log("props counter class", this.props)
        // const { count, increase, decrease } = this.props;
        return <section>
            <header>{this.state.title}:{this.props.counter}</header>
               {/* <header>{this.state.title}:{count}</header> */}
            <button onClick={this.props.handleAdd} >+</button><button onClick={this.props.handleSub}>-</button>
            {/* <button onClick={increase} >+</button><button onClick={decrease}>-</button> */}
            <button onClick={this.hanldeAlert}>Alert after 5 s</button>
        </section>;
    }

}
//If your mapStateToProps function is declared as taking one parameter, 
//it will be called whenever the store state changes, and given the store state as the only parameter.
// const mapStateToProps = (state) => ({
//     count: state.counter.value
//   });
//   const mapDispatchToProps = () => ({ 
//     increase, 
//    decrease
// });

const CounterContainer = withCounter(Counter);

export default CounterContainer;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps(),
//     null,
//     { context: MyCounter }
// )(Counter);