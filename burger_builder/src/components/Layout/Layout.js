import Auxi from '../../hoc/Auxi'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import css from './Layout.module.css'
const layout = (props) => {
    return (
        <Auxi >
            <Toolbar/>
            <SideDrawer/>
            <main>
                {props.children}
            </main>
        </Auxi>
    );
};
export default layout;