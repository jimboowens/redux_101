import React, {Component} from 'react';
// we need glue to inform this component of theStore
// so it can manage its own state and update if needed.
// to accomplish this, we use the "connect" method from
// react-redux
import {connect} from 'react-redux';
// we need bindActionCreators from redux, so we can get the actions to dispatch to the reducers
import {bindActionCreators} from 'redux';
import addStudent from '../actions/addStudent'

class Student extends Component {

    addNewStudent=()=>{
        const name = document.getElementById('student-name').value;
        this.props.addStudent(name);
    }

    render(){
        // console.log ("this.props is:",this.props)
        const students = this.props.rightSideOfRoom.map((student,i)=>{
            return(
                <li key={i}>{student}</li>
            )
        })
        return(
            <div>
                <h1>Students:</h1>
                {students}
                <input type="text" id="student-name" placeholder="Student Name"/>
                <button onClick={this.addNewStudent} className="btn btn-primary waves-effect">Add Student</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    // the state in this is the rootReducer.. 
    // this function returns and object, whose property will
    // be the props in this component. the value will be the 
    // piece of state in the reducer.
    return{
        rightSideOfRoom:state.students,
    }
}
function mapDispatchToProps(dispatch){
    // bindActionCreators takes an object as a first param
    // property is the local prop name (this.props.aaa)
    // value is the callback (the action file.js)
    // 2nd param is the dispatcher
    return bindActionCreators(
        {
        addStudent:addStudent,
        },
    dispatch)
}
// console.log (connect)

export default connect(mapStateToProps,mapDispatchToProps)(Student)