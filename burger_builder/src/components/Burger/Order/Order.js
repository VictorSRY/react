import css from "./Order.module.css"
const Order =(props)=>{
    const ingredients=[]
    for(let i in props.ingredients){
    ingredients.push(<li>{i} ({props.ingredients[i]})</li>)
    }

    return(
        <div className={css.Order}>
            <p>Ingredient:</p>
            <ul>{ingredients}</ul>
            <p>price: {props.price}&#8377;</p>
        </div>
    )
} 
export default Order