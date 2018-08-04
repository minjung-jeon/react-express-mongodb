import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import App from "./App.js";

let store = createStore(reducer, applyMiddleware(thunk));

if (module.hot) {
    module.hot.accept();
}

class Index {
    static main() {
        render(
        <Provider store={store}>
            <App/>
        </Provider>, document.querySelector('#container'));
    }
}

Index.main();