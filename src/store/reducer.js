/*
* @Author: jjsnc
* @Date:   2019-11-14 22:34:21
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-14 22:45:20
*/
import * as constants from './constants';

const defaultState = {
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case SEARCH_BLUR:
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