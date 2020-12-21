import { Component } from "react";
import { connect } from "react-redux";
import oHttp from "../../aios-o";
import Order from "../../components/Burger/Order/Order";
import WithErrorMessage from "../../hoc/WithErrorMessage";
import { getOrders } from "../../store/actions"

class Orders extends Component {
    /*state = {
        Orders: [],
        totalPrice: 0,
        loading:false,
    }*/
    componentDidMount() {
        this.props.getOrders()
        //oHttp.get('/orders.json').then(response => { const dataArray=[]; for(let key in response.data){dataArray.push(response.data[key])}; this.setState({ Orders: dataArray,loading: false }); console.log(dataArray) }).catch(error => { this.setState({ loading: false });console.log(error) })
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
        let totalPrice=0
        const orders = []
        if (this.props.orders) {
            for (let order of this.props.orders) {
                totalPrice+=order.totalPrice
                orders.push(<Order ingredients={order.order} price={order.totalPrice}/>)
            }
        }

        return (
            <div>
                {orders}
                <h2>total price: {totalPrice}&#8377;</h2>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        orders:state.order.orders,

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getOrders:()=>dispatch(getOrders())
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(WithErrorMessage(Orders,oHttp))