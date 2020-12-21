import { useState } from 'react';
import { connect } from 'react-redux';
import Auxi from '../../hoc/Auxi'
import { signOut } from '../../store/actions';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import css from './Layout.module.css'
const Layout = (props) => {
    const [state, setState] = useState( {
        showSideDrower:false,
    })
    const sideDrowerHandler = ()=>{
        console.log('back')
        setState({showSideDrower: !state.showSideDrower})
        console.log('back',state.showSideDrower)
    }
    return (
        <Auxi >
            <Toolbar toggle={sideDrowerHandler} isAuth={props.loggedIn} signOut={props.signOut}/>
            <SideDrawer show={state.showSideDrower} toggle={sideDrowerHandler} isAuth={props.loggedIn} signOut={props.signOut}/>
            <main>
                {props.children}
            </main>
        </Auxi>
    );
};
const mapStateToProps = state=>{
    return {
        loggedIn:state.auth.authenticated,
    } 
}
const mapDispatchToProps = dispatch=>{
    return {
        signOut:()=>dispatch(signOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Layout);