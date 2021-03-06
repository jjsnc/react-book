/*
* @Author: jjsnc
* @Date:   2019-11-14 22:34:09
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-15 09:25:10
*/

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// redux-immutable


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;