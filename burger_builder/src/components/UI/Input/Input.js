import css from "./Input.module.css"
const Input =(props)=>{
    let inputElement=null
    switch(props.elementType){
        case ('input') : inputElement=<input className={css.InputElement} {...props.elementConfig}/>;
        break; 
        case ('textArea') : inputElement=<input className={css.InputElement} {...props.elementConfig}/>;
        break; 
        case ('select') : inputElement=<select name={props.elementConfig.name}>
            {props.elementConfig.options.map(data=>(<option value={props.value}>{props.diplay}</option>))}
        </select>;
        break; 
        default : inputElement=<input className={css.InputElement} {...props.elementConfig}/>; 
    }
    return(
        <div className={css.Input}>
            <label className={css.Label}>{props.name}</label>
            {inputElement}
        </div>
    )
}
export default Input