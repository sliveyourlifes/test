import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './redux/configureSrote';
import AppRouter from './routing'

const store = configureStore();

ReactDOM.render(
    <>
        <ReduxProvider store={store}>
            <AppRouter />
        </ReduxProvider>
    </>,
    document.getElementById('root')
);
