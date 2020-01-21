import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './redux/configureSrote';
import TrendingPage from './pages/trending'

const store = configureStore();

ReactDOM.render(
    <>
        <ReduxProvider store={store}>
            <TrendingPage />
        </ReduxProvider>
    </>,
    document.getElementById('root')
);
