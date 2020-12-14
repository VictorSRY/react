import { Component } from 'react';
import { connect } from 'react-redux';
import oHttp from '../../aios-o';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Auxi from '../../hoc/Auxi';
import WithErrorMessage from '../../hoc/WithErrorMessage';
import { addIngredients, getsetupdata, removeIngredients } from '../../store/actions/index';

class BurgerBulder extends Component {
    state = {
        purchasable: true,
        purchaseProcess: false,
        loading: false,
    }
    componentDidMount() {

        //oHttp.get('/ingredients.json').then(response => { this.setState({ ingredients: response.data }); this.updatepurchasable(response.data) }).catch(error=>{this.setState({error:true})})
        this.props.setData()
    }
    updatepurchasable = () => {
        let count = 0
        console.log('updatepurchasable')
        const tempIngredients = { ...this.props.ingredients }
        Object.keys(tempIngredients).map((key) => { count += tempIngredients[key]; })
        if (!this.state.purchasable && count < 1) {
            this.setState({ purchasable: true })
        }
        else if (this.state.purchasable && count >= 1) {
            this.setState({ purchasable: false })
        }
        return this.state.purchasable
    }
    /*addIngredients = (type) => {
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
    }*/
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
        /*const queryParams=[]
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]) )
        }
        const queryString=queryParams.join('&')*/
        this.props.history.push({
            pathname:'/checkout',
        })
    }
    render() {
        let summary = null
        let burger = this.props.error?<p>cant Load ingredients</p>:<Spinner />
        if (this.props.ingredients) {
            burger = (
                <Auxi>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls addClick={this.props.addIngredients} removeClick={this.props.removeIngredients} purchasable={this.updatepurchasable()} processPurchase={this.processPurchase} />
                </Auxi>
            )
            summary = <OrderSummary ingredients={this.props.ingredients} total={this.props.totalPrice} hide={this.cancelPurchase} continue={this.continueHandler} />
        }
        return (
            <Auxi>
                <h1>{this.props.totalPrice}</h1>
                <Modal show={this.state.purchaseProcess} hide={this.cancelPurchase}>
                    {summary}
                </Modal>
                {burger}
            </Auxi>
        );
    };
}

const mapDisptchToProps=(dispatch)=>{
    return{
        addIngredients:(ingredientName)=>dispatch(addIngredients(ingredientName)),
        removeIngredients:(ingredientName)=>dispatch(removeIngredients(ingredientName)),
        setData:()=>dispatch(getsetupdata())
    }
}
const mapStateToProps=(state)=>{
    return{
        ingredients:state.ingredients,
        totalPrice:state.totalPrice,
        error:state.error,
    };
}

export default connect(mapStateToProps,mapDisptchToProps)(WithErrorMessage(BurgerBulder, oHttp));