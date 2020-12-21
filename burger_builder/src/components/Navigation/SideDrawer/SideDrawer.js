import Logo from "../../Logo/Logo";
import NavigationItems  from "../NavigationItems/NavigationItems";
import Auxi from '../../../hoc/Auxi'
import BackDrop from "../../UI/BackDrop/BackDrop";

import css from './SideDrawer.module.css'

const SideDrawer = (props)=>{
    const classes=[css.SideDrawer,props.show?css.Open:css.Close]
    return(
        <Auxi>
            <BackDrop show={props.show} hide={props.toggle}/>
            <div className={classes.join(' ')}>
                <div className={css.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems  isAuth={props.isAuth} signOut={props.signOut}/>
                </nav>
            </div>
        </Auxi>
    );
}
export default SideDrawer