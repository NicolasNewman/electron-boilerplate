import * as React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.less';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line global-require
    const Root = require('./containers/Root').default;
    render(
        <Root store={store} history={history} />,
        document.getElementById('root')
    );
});
