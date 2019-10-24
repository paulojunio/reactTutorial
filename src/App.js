import React, { useState, Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Person from './Person/Person';
import * as actionTypes from './store/actions'




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
    counter: 0,
    refNumber: 1,
    results: [], 
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
  counterCalcHandle = event => {
    this.setState({
      refNumber: event.target.value,
    })
  }
  render() {
    const { persons, showPersons} = this.state;
    const classes = {
      style: {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        marginBottom: '10px',
      },
      styleDiv: {
        margin: '0 auto',
        color: 'white',
        marginTop: '20px',
        backgroundColor: 'orange',
        width: '80%',
        padding: '10px',
      },
      styleButtonCal: {
        backgroundColor: '#5151d8',
        width: '20%',
        border: '1px solid #c1c1c1',
        fontSize: '18px',
        borderRadius: '2px',
        color: '#f1f1f1',
        padding: '5px',
        margin: '8px',
      },
      styleInput: {
        marginTop: '10px',
        fontSize: '18px',
        width: '10%',
        border: 'none',
        padding: '3px',
      },
      styleSecDiv: {
        marginBottom: '10px',
      }
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
      classes.style.backgroundColor = 'red';
    }
    return (
      <div className="App">
          <h1>Tutorial React</h1>
          <button style={classes.style} onClick={this.togglePersonsHandle}> Click to see all people! </button>
          {personsExist}
          <div className="App" style={classes.styleDiv}>
            <h2>Number of redux: {this.props.ctr}</h2>
            <div style={classes.styleSecDiv}>             
              <input type='number' onChange={(event) => this.counterCalcHandle(event)} style={classes.styleInput}/>
            </div>
            <button style={classes.styleButtonCal} onClick={this.props.incrementCount}>Increment</button>
            <button style={classes.styleButtonCal} onClick={this.props.addCount.bind(this, this.state.refNumber)}>Add {this.state.refNumber}</button>
            <button style={classes.styleButtonCal} onClick={this.props.decrementCount}>Decrement</button>
            <button style={classes.styleButtonCal} onClick={this.props.subtractCount.bind(this, this.state.refNumber)}>Subtract {this.state.refNumber}</button>
            <div style={classes.styleSecDiv}>             
              <button style={classes.styleButtonCal} onClick={() => this.props.addResult(this.props.ctr)} >Click To Store Result</button>
            </div>
          </div>
          <div style={classes.styleDiv}>
            <h2 style={{color: 'white', fontSize: '18px'}}>-- Results --</h2>
            <ul style={{ marginRight: '40px', fontSize: '24px'}}>
              {this.props.storeResults.map(strResults => {
                return (
                  <li key={strResults.id} onClick={() => this.props.deleteResult(strResults.id)}>{strResults.value}</li>
                );
              })}
            </ul>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storeResults: state.res.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => dispatch({type:actionTypes.INCREMENT}),
    decrementCount: () => dispatch({type:actionTypes.DECREMENT}),
    addCount: (refNumber) => dispatch({type:actionTypes.ADD, value: parseInt(refNumber)}), //Precisa de ParseInt para não ter problema com soma de string.
    subtractCount: (refNumber) => dispatch({type:actionTypes.SUBTRACT, value: parseInt(refNumber)}),
    addResult: (refNumber) => dispatch({type:actionTypes.ADDRESULT, value: parseInt(refNumber)}),
    deleteResult: (index) => dispatch({type:actionTypes.DELETERESULT, value: index})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

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

