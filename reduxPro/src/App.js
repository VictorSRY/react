import { Component } from 'react';
import './App.css';
import Counter from './containers/Counter/Counter';

export default class App extends Component {
  render(){
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}
