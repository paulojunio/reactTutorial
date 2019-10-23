import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props =>  {
  const [ personsArray, setPersonsArray ] = useState ({
    persons: [
      { name: 'Paulo', age: 22},
      { name: 'João', age: 23 },
      { name: 'Jorge', age: 21}
    ]
  })

  const switchPersonsHandle = () => {
    setPersonsArray({
      persons: [
        { name: 'Paulo Junio', age: 22},
        { name: 'João Paulo', age: 23 },
        { name: 'Jorge Nao sei', age: 21}
      ]
    });
  }
  return (

    <div className="App">
        <h1>Tutorial React</h1>
        <button onClick={switchPersonsHandle}> Click to change! </button>
        <Person name={personsArray.persons[0].name} age={personsArray.persons[0].age}/>
        <Person name={personsArray.persons[1].name} age={personsArray.persons[1].age}/>
        <Person name={personsArray.persons[2].name} age={personsArray.persons[2].age}/>
    </div>
  );
}

export default App;
