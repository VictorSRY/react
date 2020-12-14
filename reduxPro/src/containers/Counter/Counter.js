
import { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }
    render () {
        console.log(this.props.result.length,this.props.result)
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.dicrement}  />
                <CounterControl label="Add 5" clicked={()=>this.props.add(5)}  />
                <CounterControl label="Subtract 5" clicked={()=>this.props.sub(5)}  />
                <CounterControl label="add" clicked={()=>this.props.saveResult(this.props.counter)}/>
                <CounterControl label="delete" clicked={()=>this.props.deleteResult(this.props.result.length - 1)}/>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        counter:state.count.counter,
        result:state.result.result
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        onIncrement: () => dispatch(actions.increment()),
        add: (val) => dispatch(actions.add(val)),
        dicrement: () => dispatch(actions.dicrement()),
        sub: (val) => dispatch(actions.sub(val)),
        saveResult: (counter) => dispatch(actions.saveR(counter)),
        deleteResult: (index) => dispatch(actions.deleteR(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);