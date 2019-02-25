import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'; //step 1, install module
import {createStore, applyMiddleware} from 'redux'; // step 2, install module
import reducers from './reducers/index'; // steps to follow - make reducers folder and js files, 
// make sure the index is the root reducer and it goes into the store. but if needs "Stuff."
import reduxPromise from 'redux-promise';

//back from the reducers.. now to start the store!

const theStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)(reducers) 
// const middleware = applyMiddleware(reduxPromise)
// const theStore = middleware(createStore)
// const theStoreWithMiddleWare = theStore(reducers)

 ReactDOM.render(
    <Provider store={theStoreWithMiddleWare}>
        <App />, 
    </Provider>,
    document.getElementById('root')
    );
