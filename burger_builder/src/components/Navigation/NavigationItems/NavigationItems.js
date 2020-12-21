import NavigationItem from './NavigationItem/NavigationItem'
import css from './NavigationItems.module.css'
import Button from '../../UI/Button/Button'


const NavigationItems = (props)=>{
    const items = null
    console.log(props.isAuth)
    return (
            <ul className={css.NavigationItems}>
                <NavigationItem link='/' >Home</NavigationItem>
                <NavigationItem link='/orders' >Orders</NavigationItem>
                {props.isAuth?<li className={css.Li} onClick={props.signOut} style={{color:'white'}}><a>Logout</a></li>:<NavigationItem link='/auth' >LogIn</NavigationItem>}
            </ul>
    )
}

export default NavigationItems 