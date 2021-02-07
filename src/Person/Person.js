import React from 'react';
import './Person.css'

const Person = (props) => {
    return(
        <div className="Person">
            <p>I'm {props.name} and I'm {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" name="" id="" onChange={props.changed}/>
        </div>
    )
}

export default Person;