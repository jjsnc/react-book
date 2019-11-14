/*
* @Author: jjsnc
* @Date:   2019-11-14 22:34:21
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-15 00:28:07
*/

import { combineReducers } from 'redux'

import {reducer as headerReducer } from '../common/header/store/'


export  default combineReducers({
	header:headerReducer
})