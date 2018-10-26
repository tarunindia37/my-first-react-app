import React, { Component } from 'react';
import classes from "./Person.css";
import WithClass from '../../../hoc/WithClass';
import { AuthContext } from '../../../containers/App'

class Person extends Component {
    render() {
        let props = this.props;
        return (
            <WithClass classes={classes.Person}>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={props.clickHandler}>I'm a {props.name} and My age is {props.age} years old !!!</p>
                <p>{props.children}</p>
                <input
                    type="text"
                    onChange={props.changed}
                    value={props.name}></input>
            </WithClass>
        );
    }
}

export default Person