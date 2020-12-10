import { Component } from 'react';
import oHttp from '../../aios-o';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Auxi from '../../hoc/Auxi';
import WithErrorMessage from '../../hoc/WithErrorMessage';

const INGREDIENTS_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 15,
    meat: 30,
}

class BurgerBulder extends Component {
    state = {
        ingredients: null,
        totalPrice: 40,
        purchasable: true,
        purchaseProcess: false,
        loading: false,
        error: false,
    }
    componentDidMount() {
        oHttp.get('/ingredients.json').then(response => { this.setState({ ingredients: response.data }); this.updatepurchasable(response.data) }).catch(error=>{this.setState({error:true})})
    }
    updatepurchasable = (ingredients) => {
        let count = 0
        console.log('updatepurchasable')
        const tempIngredients = { ...ingredients }
        Object.keys(tempIngredients).map((key) => { count += ingredients[key]; })
        if (!this.state.purchasable && count < 1) {
            this.setState({ purchasable: true })
        }
        else if (this.state.purchasable && count >= 1) {
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
    processPurchase = () => {
        this.setState({ purchaseProcess: true })
    }
    cancelPurchase = () => {
        this.setState({ purchaseProcess: false })
    }

    continueHandler = () => {
        /*this.setState({ loading: true })
        //alert('purchased')
        const data = {
            name: 'Victor',
            address: 'Japan',
            contact: '101',
            order: this.state.ingredients,
        }
        oHttp.post('/orders.json', data).then(response => { console.log(response); this.setState({ loading: false, purchaseProcess: false }) }).catch(error => { console.log(error); this.setState({ loading: false, purchaseProcess: false }) })
        */
        const queryParams=[]
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]) )
        }
        const queryString=queryParams.join('&')
        this.props.history.push({
            pathname:'/checkout',
            search:queryString
        })
    }
    render() {
        let summary = null
        let burger = this.state.error?<p>cant Load ingredients</p>:<Spinner />
        if (this.state.ingredients) {
            burger = (
                <Auxi>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls addClick={this.addIngredients} removeClick={this.removeIngredients} purchasable={this.state.purchasable} processPurchase={this.processPurchase} />
                </Auxi>
            )
            summary = <OrderSummary ingredients={this.state.ingredients} total={this.state.totalPrice} hide={this.cancelPurchase} continue={this.continueHandler} />
        }
        if (this.state.loading) {
            summary = <Spinner />
        }
        return (
            <Auxi>
                <h1>{this.state.totalPrice}</h1>
                <Modal show={this.state.purchaseProcess} hide={this.cancelPurchase}>
                    {summary}
                </Modal>
                {burger}
            </Auxi>
        );
    };
}

export default WithErrorMessage(BurgerBulder, oHttp);