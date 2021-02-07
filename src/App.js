import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  const [personsState,setPersonsState] = useState({
    persons : [
      {name : "Vivek", age: "21"},
      {name : "Neel", age: "24"},
      {name : "Ayush", age: "25"},
    ]
  })

  const swichHandler =()=> {
    setPersonsState({
      persons : [
      {name : "Megh", age: "22"},
      {name : "Hemil", age: "23"},
      {name : "Meet", age: "20"},
    ]
    })
   }
  // //this is not work
  // const nameChangeHandler = (props) => {
  //   const nameChange = useState({
  //     persons : [
  //      {name : "Vivek", age: "21"},
  //      {name : event.target.value, age: "24"},
  //      {name : "Ayush", age: "25"},
  //    ]
  //   })
  // }

   const style = {
     backgroundColor:'white',
     font:'inherit',
     border: '1px solid blue',
     padding:'8px'
   };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={swichHandler}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}> 
          My Hobby is Cricket\
        </Person>

        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        // changed={nameChangeHandler}
        />

        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
      </div>
    );
}

export default App;
