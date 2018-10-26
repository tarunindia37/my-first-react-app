import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{

    render(){
        return this.props.persons.map((person,personIndex)=>{
            return <Person 
                clickHandler={ () => this.props.clicked(personIndex) }
                name={person.name}
                age={person.age}
                key={person.id}
                changed={ (event) => this.props.changed(event,person.id)}/>
          });
    }
}

export default Persons;