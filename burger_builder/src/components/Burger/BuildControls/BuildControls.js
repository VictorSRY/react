import css from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const BuildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ]
    console.log(props.purchasable)
    return (
        <div className={css.BuildControls}>
            { controls.map((data) => (
                <BuildControl addClick={props.addClick} removeClick={props.removeClick} key={data.label} label={data.label} type={data.type} />
    ))}
    <button className={css.OrderButton} onClick={props.processPurchase} disabled={props.purchasable}>Order</button>
        </div>
    )
}
export default BuildControls