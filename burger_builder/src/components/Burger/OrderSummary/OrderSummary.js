import Auxi from "../../../hoc/Auxi"
import Button from "../../UI/Button/Button"

const OrderSummary = (props)=>{
const ingredientsSum = Object.keys(props.ingredients).map(key=>(<li key={key}><span style={{textTransform:'capitalize'}}>{key}</span> : {props.ingredients[key]}</li>))
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>burger with following ingredients:</p>
            <ul>
                {ingredientsSum}
            </ul>
            <p>continue to pay <b>&#8377;{props.total}</b></p>
            <Button type='Success' click={props.continue}>Continue</Button>
            <Button type='Danger' click={props.hide}>Cancel</Button>
        </Auxi>
    )
}
export default OrderSummary