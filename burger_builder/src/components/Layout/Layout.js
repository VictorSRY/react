import { useState } from 'react';
import Auxi from '../../hoc/Auxi'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import css from './Layout.module.css'
const Layout = (props) => {
    const [state, setState] = useState( {
        showSideDrower:true,
    })
    const sideDrowerHandler = ()=>{
        console.log('back')
        setState({showSideDrower: !state.showSideDrower})
        console.log('back',state.showSideDrower)
    }
    return (
        <Auxi >
            <Toolbar toggle={sideDrowerHandler}/>
            <SideDrawer show={state.showSideDrower} toggle={sideDrowerHandler}/>
            <main>
                {props.children}
            </main>
        </Auxi>
    );
};
export default Layout;