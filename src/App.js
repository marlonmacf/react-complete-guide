import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/*
const app = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'mandrel', age: 26 },
      { name: 'yooo', age: 29 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value')
  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'mandrelian', age: 26 },
        { name: 'yooo', age: 30 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
    </div>
  )
}

export default app;
*/

class App extends Component {

  state = {
    persons: [
      { id: 'ID01', name: 'mandrel', age: 26 },
      { id: 'ID02', name: 'yooo', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  /*
  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'mandrelian';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'yooo', age: 30 }
      ]
    });
  }
  */

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === id; });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    // const person = Object.assign({}, this.state.persons[personIndex]);

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      cursor: 'pointer',
      font: 'inherit',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                age={person.age}
                name={person.name}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)} />
            })
          }
          {
            /*
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'mandrel!')}
              changed={this.nameChangeHandler}>My Hobbies: Racing</Person> 
            */
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toogle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;