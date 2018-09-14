import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
     assignedClasses.push(classes.red) //assignedClasses = 'red'
    }
    if(props.persons.length <= 1) {
     assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
        <h1>ReactApp</h1>
        <p className={assignedClasses.join(' ')}>This really works</p>
        <button className={btnClass} onClick={props.clicked}>Switch name</button>
          </div>
    );
};
export default cockpit;