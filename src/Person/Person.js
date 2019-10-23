import React from 'react';
import './Person.css';


const person = props => {
    return (
        <div className='person-div'>
            <p onClick={props.click}>Hello my name is {props.name} and i'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default person;