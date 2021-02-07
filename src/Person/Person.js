import React from 'react';

const Person = (props) => {
    return(
        <div className="">
            <p>I'm {props.name} and I'm {props.age} years old. </p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;