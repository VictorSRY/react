import React, { Component } from 'react'
import './App.css';
import Radium, { StyleRoot } from 'radium'
import Pirsons from '../components/Pirsons/Pirsons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auth from '../context/auth'

class App extends Component {
  state = {
    pirson: [
      { name: 'Victor', age: 22 },
      { name: "Victoria", age: 21 },
    ],
    loginState: false,
  }

  constructor(props) {
    super(props);
  }

  buttonNameHandler = () => {
    console.log("yelo")
    this.setState({
      pirson: [
        { name: 'Damon', age: 22 },
        { name: "Alex", age: 21 },
      ],
      show: false
    })
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  deletEle = (index) => {
    console.log("deleting: " + index)
    console.log(this.state.pirson)
    const temp = this.state.pirson.slice()
    temp.splice(index, 1)
    this.setState({ pirson: temp })
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate")
    return true
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  static ContextType = Auth

  login = () => {
    this.setState({ loginState: true })
  }



  render() {
    let condition_person = null
    if (this.state.show) {
      condition_person = (
        <Pirsons pirson={this.state.pirson} deletEle={this.deletEle} />
      )
    }
    return (
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <Auth value={{ loginState: this.state.loginState, login: this.login }}>
              <Cockpit toggleShow={this.toggleShow} />
              {condition_person}
            </Auth>
          </header>
        </div>
      </StyleRoot>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,"hello test"))
  }

}


export default Radium(App);
