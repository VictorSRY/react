import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import css from './Toolbar.module.css'

const Toolbar = (props) => (
    <header className={css.Toolbar} >
        <DrawerToggle toggle={props.toggle}/>
        <div className={css.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar