/*
* @Author: jjsnc
* @Date:   2019-11-14 22:34:21
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 10:35:05
*/

import { combineReducers } from 'redux-immutable'

import {reducer as headerReducer } from '../common/header/store/'
import {reducer as homeReducer } from '../pages/home/store/'
import {reducer as detailReducer} from '../pages/detail/store'

export  default combineReducers({
	header:headerReducer,
	home:homeReducer,
	detail: detailReducer
})