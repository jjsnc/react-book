/*
* @Author: jjsnc
* @Date:   2019-11-14 22:34:21
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-15 09:26:50
*/

import { combineReducers } from 'redux-immutable'

import {reducer as headerReducer } from '../common/header/store/'


export  default combineReducers({
	header:headerReducer
})