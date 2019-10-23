import React, { useState, Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  constructor(props){
    super();   
  }
  state = {
    persons: [
      { name: 'Paulo', age: 22},
      { name: 'João', age: 23 },
      { name: 'Jorge', age: 21}
    ]
  };

  switchPersonsHandle = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22},
        { name: 'João Paulo', age: 23 },
        { name: 'Jorge Nao sei', age: 21}
      ]
    });
  }

  nameChangedHandle = (event) => {
    this.setState({
      persons: [
        { name: 'Paulo Junio', age: 22},
        { name: event.target.value, age: 23 },
        { name: 'Jorge Nao sei', age: 21}
      ]
    });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    const { persons } = this.state;
    return (
      <div className="App">
          <h1>Tutorial React</h1>
          <button style={style} onClick={this.switchPersonsHandle.bind(this, 'Paulinho')}> Click to change! </button>
          <Person name={persons[0].name} age={persons[0].age}/>
          <Person 
            name={persons[1].name} 
            age={persons[1].age} 
            click={this.switchPersonsHandle.bind(this, 'PaulinhoDoido')} 
            changed={this.nameChangedHandle}>OMG i've children</Person>
          <Person name={persons[2].name} age={persons[2].age}/>
      </div>
    );
  }
}
export default App;

/* App with fuction
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
*/

