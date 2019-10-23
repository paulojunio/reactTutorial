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
      { id: '1',name: 'Paulo', age: 22},
      { id: '2',name: 'João', age: 23 },
      { id: '3',name: 'Jorge', age: 21}
    ], 
    showPersons: false,
  };

  /*switchPersonsHandle = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22},
        { name: 'João Paulo', age: 23 },
        { name: 'Jorge Nao sei', age: 21}
      ]
    });
  }*/

  nameChangedHandle = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [ ...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });

    //console.log(this.state.persons)
  }

  deletePersonHandle = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons,
    });
  }
  togglePersonsHandle = () => {
    const { showPersons } = this.state
    this.setState({
      showPersons: !showPersons
    });
  }
  render() {
    const { persons, showPersons} = this.state;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '10px',
    }

    let personsExist = null
    if ( showPersons ) {
      personsExist = (
        <div>
          {persons.map( (person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age} 
                click={this.deletePersonHandle.bind(this, index)} 
                key={person.id}
                changed={(event) => this.nameChangedHandle(event, person.id)}/>
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
          <h1>Tutorial React</h1>
          <button style={style} onClick={this.togglePersonsHandle}> Click to see all people! </button>
          {personsExist}
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

