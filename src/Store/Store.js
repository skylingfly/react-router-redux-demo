/**
 * Create by Skyling0408 on 2018/6/27.
 */
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f=>f

    ))
export default store
