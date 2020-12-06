import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import css from './Toolbar.module.css'

const Toolbar = (props) => (
    <header className={css.Toolbar} >
        <div>Menue</div>
        <Logo/>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar