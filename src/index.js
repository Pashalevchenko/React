import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    caunterValue: 0,
    posts: []
}

const counterReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, caunterValue: state.caunterValue + action.payload}
        }
        case 'DEC': {
            return {...state, caunterValue: state.caunterValue - 1}
        }
        case 'RESET': {
            return {...state, caunterValue: 0}
        }
        case 'SET.POSTS': {
            return {...state, posts: action.payload}
        }
        default:
            return state
    }
}

const store = createStore(counterReduser)
console.log(store)



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
