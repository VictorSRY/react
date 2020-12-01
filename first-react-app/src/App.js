import React, { useState } from 'react'
import './App.css';
import Pirson from './Pirson/Pirson';

function App(){
  const [pirsonState,updatePirson] = useState({
    pirson: [
      { name: 'Victor', age: 22 },
      { name: "Victoria", age: 21 },
    ],
  })

  const buttonNameHandler = () => {
    console.log("yelo")
    updatePirson({
      pirson: [
        { name: 'Damon', age: 22 },
        { name: "Alex", age: 21 },
      ]
    })
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>hi the is first react app</h1>
        <button className="btn" onClick={buttonNameHandler}>Switch Name</button>
        <Pirson name={pirsonState.pirson[0].name} age={pirsonState.pirson[0].age} />
        <Pirson name={pirsonState.pirson[1].name} age={pirsonState.pirson[1].age} call={buttonNameHandler} >Hobby: playing with {pirsonState.pirson[0].name}</Pirson>
      </header>
    </div>
  );
  //return React.createElement('div',{className:"App"},React.createElement('h1',null,"hello test"))

}


export default App;
