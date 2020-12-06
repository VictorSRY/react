import Logo from "../../Logo/Logo";
import NavigationItems  from "../NavigationItems/NavigationItems";

import css from './SideDrawer.module.css'

const SideDrawer = (props)=>{
    const classes=null
    return(
        <div className={css.SideDrawer}>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
             
        </div>
    );
}
export default SideDrawer