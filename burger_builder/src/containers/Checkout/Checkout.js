import { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

export default class Checkout extends Component{
    state = {
        ingredients: {
            bacon:0,
            salad:1,
            cheese:0,
            meat:0,
        }
    }
    componentDidMount(){
        // new URLSearchParams() did'nt work 
        // so alt (this.props.location.search).substr(1).split('&').map(pair=>(pair.split('='))) 
        // of (new URLSearchParams(this.props.location.search).entries()

        // const query = new URLSearchParams(this.props.location.search);
        const query = (this.props.location.search).substr(1).split('&').map(pair=>(pair.split('=')))
        const ingredients={}
        for(let i of query){
            ingredients[i[0]]= +i[1]
        }
        this.setState({ingredients:ingredients})
    }
    continueHandler=()=>{
        this.props.history.push(this.props.match.path+'/contact-data')
    }
    cancleHandler=()=>{
        this.props.history.goBack();
    }
    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} continue={this.continueHandler} cancle={this.cancleHandler}/>
                <Route path={this.props.match.path+'/contact-data'} render={(props)=>(<ContactData order={this.state.ingredients} {...props}/>)}/>
            </div>
        )
    }
}