/*
* @Author: jjsnc
* @Date:   2019-11-14 22:34:52
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-15 09:19:39
*/

import * as constants from './constants';

//immutable 库

import { fromJS } from 'immutable';


const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		/*
           immutable 对象的set 方法 ,会结合之前immutable 对象的值
           和设置的值 ,返回一个全新的对象
		*/
		case constants.SEARCH_FOCUS:
	     return  state.set('focused', true);
		case constants.SEARCH_BLUR:
	     return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}