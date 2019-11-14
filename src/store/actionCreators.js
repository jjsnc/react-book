/*
* @Author: jjsnc
* @Date:   2019-11-14 22:40:52
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-14 23:07:26
*/

import * as constants from './constants';



export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});
