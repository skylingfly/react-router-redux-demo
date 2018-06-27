import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Store/Store'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom'
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
</Provider>)

    , document.getElementById('root'));
registerServiceWorker();
