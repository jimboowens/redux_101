// this is the master reducer, and it is our state. master reducer doesn't know about react and never will

import {combineReducers} from 'redux';
import StudentReducer from './StudentReducer';
// build rootReducer with combineReducers, which takes one arg-- an object with the peopersies of whatever state should be called value of the reducer
const rootReducer = combineReducers({
    // the name of the state will be the prop used by react, and the value will be the reducer file
    students:StudentReducer,
})

export default rootReducer;