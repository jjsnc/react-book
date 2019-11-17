/*
* @Author: jjsnc
* @Date:   2019-11-17 10:23:25
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 10:28:19
*/

import {fromJS} from 'immutable';

import * as constants from './constants'

const defaultState = fromJS({
	title:'',
	content:''
})

export default (state=defaultState, action)=> {
	switch(action.type){
       case constants.CHANGE_DETAIL:
       return state.merge({
       	title:action.title,
       	content: action.content
       })
       default:
       return state
	}

}