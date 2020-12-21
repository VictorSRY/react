import Burger from "../Burger/Burger"
import Button from "../UI/Button/Button"

import css from "./CheckoutSummary.module.css"
const CheckoutSummary = (props)=>{
    return(
        <div className={css.CheckoutSummary}>
            <h1>Here's your Burger:</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
                <Button type='Success' click={props.continue} >continue</Button>
                <Button type='Danger' click={props.cancle}>cancle</Button>
            </div>
        </div>
    )
}
export default CheckoutSummary