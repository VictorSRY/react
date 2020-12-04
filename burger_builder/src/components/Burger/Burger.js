import css from './Burger.module.css'
import BurgerIngerdients from './BurgerIngredients/BurgerIngredients'

const burger = (props) =>{
    let buildBurger = Object.keys(props.ingredients).map( key => {
        return [...Array(props.ingredients[key])].map((_,index) => {
            return <BurgerIngerdients key={ key+index } type= {key} />
        });
    } ).reduce((array,ele)=>array.concat(ele),[]);
    if(buildBurger.length === 0){
        buildBurger = <p>add ingredients!</p>;
    }
    return (
        <div className={css.Burger}>
            <BurgerIngerdients type= 'bread-top'/>
            {buildBurger}
            <BurgerIngerdients type= 'bread-bottom'/>
        </div>
    )
}

export default burger