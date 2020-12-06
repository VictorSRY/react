import { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../../hoc/Auxi';

const INGREDIENTS_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 15,
    meat: 30,
}

class BurgerBulder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 2,
            meat: 1,
        },
        totalPrice: 150,
        purchasable: false,
        purchaseProcess: false,
    }
    updatepurchasable = (ingredients) => {
        let count = 0
        const tempIngredients = { ...ingredients }
        Object.keys(tempIngredients).map((key) => { console.log(key,ingredients[key]);count += ingredients[key]; })
        if ( !this.state.purchasable && count < 1) {
            this.setState({ purchasable: true })
        }
        else if ( this.state.purchasable && count >= 1) {
            this.setState({ purchasable: false })
        }
    }
    addIngredients = (type) => {
        const tempState = { ...this.state.ingredients }
        tempState[type] = this.state.ingredients[type] + 1
        this.setState({ totalPrice: (this.state.totalPrice + INGREDIENTS_PRICE[type]), ingredients: tempState })
        this.updatepurchasable(tempState)
    }
    removeIngredients = (type) => {
        if (this.state.ingredients[type] >= 1) {
            const tempState = { ...this.state.ingredients }
            tempState[type] = this.state.ingredients[type] - 1
            this.setState({ totalPrice: (this.state.totalPrice - INGREDIENTS_PRICE[type]), ingredients: tempState })
            this.updatepurchasable(tempState)
        }
    }
    processPurchase=()=>{
        this.setState({purchaseProcess: true})
    }
    cancelPurchase = ()=>{
        this.setState({purchaseProcess: false})
    }
    continueHandler=()=>{
        alert('purchase')
    }
    render() {
        return (
            <Auxi>
                <h1>{this.state.totalPrice}</h1>
                <Modal show={this.state.purchaseProcess} hide={this.cancelPurchase}>
                    <OrderSummary ingredients={this.state.ingredients} total={this.state.totalPrice} hide={this.cancelPurchase} continue={this.continueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addClick={this.addIngredients} removeClick={this.removeIngredients} purchasable={this.state.purchasable} processPurchase={this.processPurchase}/>
            </Auxi>
        );
    };
}

export default BurgerBulder;