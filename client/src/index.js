import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import rootReducer from './reducers/index';

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)

    } catch(err) {
        console.log(err)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch(err) {
        console.log(err)
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
