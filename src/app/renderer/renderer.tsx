import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../store/store';

import App from '../container/App';

const rootElement = document.querySelector('#app');
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, rootElement);