/*
* @Author: jjsnc
* @Date:   2019-11-14 22:34:21
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-14 23:13:16
*/
import * as constants from './constants';

console.log(constants,'constants')

const defaultState = {
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
};

export default (state = defaultState, action) => {
		 let newState = JSON.parse(JSON.stringify(state))
	switch(action.type) {
		case constants.SEARCH_FOCUS:
		    newState.focused = true
	     return newState
		case constants.SEARCH_BLUR:
		    newState.focused = false
	     return newState
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