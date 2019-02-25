import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/index'

// make a store for redux to use!

const theStore = createStore(reducers);
// provider is the component that makes the connect work (connect is inside the containers). 
// it takes a prop oc store, which is the reduxStore.
// the redux store was made by the createStore and giving it te rootReducer

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root'));


