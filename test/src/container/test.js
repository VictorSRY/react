import { Component } from "react"

export default class Test extends Component{
    state={
        count:0,
        temptest:2
    }
    inc =()=>{
        const updatedCount=this.state.count+1
        this.setState({count:updatedCount})
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <h2>this is calss</h2>
                <p>{this.state.count},{this.props.test}</p>
                <button type='button' onClick={this.inc}>print</button>
            </div>
        )
    }
}