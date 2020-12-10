import NavigationItem from './NavigationItem/NavigationItem'
import css from './NavigationItems.module.css'


const NavigationItems = (props)=>{
    const items = null    
    return (<ul className={css.NavigationItems}>
        <NavigationItem link='/' >Home</NavigationItem>
        <NavigationItem link='/orders' >Orders</NavigationItem>
        </ul>)
}

export default NavigationItems 