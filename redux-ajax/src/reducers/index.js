// THIS IS THE ROOT REDUCER

// To make a RootReducer:
// 1. Get combineReducers method from redux
// 2. Call combineReducers method an pass it an object
// 3. Each key/property of the object, will be a single piece of application/redux state
// 4. Each value will be a single reducer (imported)

import {combineReducers} from 'redux';
import weatherReducer from './weatherReducer';
import stockReducer from './stockReducer'

//make sure to import all reducers, heading to stock and weather reducers (more or less identical)

const rootReducer = combineReducers({
    weather:weatherReducer,
    stocks:stockReducer,
})

export default rootReducer;
