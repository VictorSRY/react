import NavigationItem from './NavigationItem/NavigationItem'
import css from './NavigationItems.module.css'


const NavigationItems = (props)=>{
    const items = null    
    return (<ul className={css.NavigationItems}><NavigationItem link='/' active>test</NavigationItem></ul>)
}

export default NavigationItems 