import { NavLink } from 'react-router-dom'
import css from './NavigationItem.module.css'

const NavigationItem=(props)=>(<li className={css.NavigationItem}><NavLink to={props.link} exact activeClassName={css.active}>{props.children}</NavLink></li>)

export default NavigationItem