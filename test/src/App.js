import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';

import Blog from './container/BlogPage/BlogPage';
import SignIn from './container/SignIn/SignIn';

function App() {
  {/**/}
  return (
    <React.Fragment>
      <Switch>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/home" component={Blog}/>
        <Route path="/" component={Blog}/>
      </Switch>
    </React.Fragment>
    
  );
}

export default App;
