import css from './Button.module.css'

const Button = (props) => {
    const classes=[css.Button,css[props.type]]

    return (
    <button className={classes.join(' ')} onClick={props.click}>{props.children}</button>
    )
}

export default Button 