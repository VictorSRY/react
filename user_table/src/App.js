import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import SignIn from './container/SignIn/SignIn'
import Home from './container/Home/Home'
import Action from './container/Action/Action';
import { connect } from 'react-redux';
import defaultFire from './firebase/firebase_config';

function App(props) {
  console.log(defaultFire.auth().currentUser);
  return (
    <React.Fragment>
      <Switch>
        <Route path="/signin" component={SignIn}/>
        {props.auth?null:<Redirect to="/signin"/>}
        <Route path="/add" component={Action}/>
        <Route path="/edit" component={Action}/>
        <Route path="/" component={Home}/>
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps=state=>{
  return {
    auth:state.auth.authenticated,
  }
}

export default connect(mapStateToProps)(App);
