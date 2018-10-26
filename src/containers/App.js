import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends Component {

  state = {
    persons: [
      { id: '11', name: "Max", age: 28 },
      { id: '12', name: "Tarun", age: 33 },
      { id: '13', name: "Akansha", age: 29 }
    ],
    showPerson: false,
    isAuthenticate: false,
    otherState: "some value"
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person["name"] = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; // Do not immute the object by doing this
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  toggleNameHandler = () => {
    const showPerson = this.state.showPerson
    this.setState({
      showPerson: !showPerson
    });
  };

  loginHandler = () => {
    this.setState({
      isAuthenticate: true
    })
  }

  render() {
    let persons = null;


    if (this.state.showPerson)
      persons = <div>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      </div>

    return (
      <WithClass classes={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          clicked={this.toggleNameHandler}
          showPerson={this.state.showPerson}
          loginHandler={this.loginHandler} />
        <AuthContext.Provider
          value={this.state.isAuthenticate}>
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
