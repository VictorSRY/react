import { Component } from "react";
import oHttp from "../../aios-o";
import Order from "../../components/Burger/Order/Order";
import WithErrorMessage from "../../hoc/WithErrorMessage";

const INGREDIENTS_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 15,
    meat: 30,
}

class Orders extends Component {
    state = {
        Orders: [],
        totalPrice: 0,
        loading:false,
    }
    componentDidMount() {
        oHttp.get('/orders.json').then(response => { const dataArray=[]; for(let key in response.data){dataArray.push(response.data[key])}; this.setState({ Orders: dataArray,loading: false }); console.log(dataArray) }).catch(error => { this.setState({ loading: false });console.log(error) })
    }
    /*getTotal = (ingredients) => {
        let price = 40
        for (let i in ingredients) {
            price += INGREDIENTS_PRICE[i] * ingredients[i]
        }
        this.setState({ totalPrice: this.state.totalPrice + price })
        return price
    }*/
    render() {
        const orders = []
        if (this.state.Orders) {
            for (let order of this.state.Orders) {
                console.log(order)
                orders.push(<Order ingredients={order.ingredients} />)
            }
        }

        return (
            <div>
                {orders}
                <h2>total price: {this.state.totalPrice}</h2>
            </div>
        )
    }
}
export default WithErrorMessage(Orders,oHttp)