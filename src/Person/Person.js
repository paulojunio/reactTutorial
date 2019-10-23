import React from 'react';



const person = props => {
    return (
        <div className='person-div'>
            <p>Hello my name is {props.name} and i'm {props.age} years old!</p>
        </div>
    );
}

export default person;