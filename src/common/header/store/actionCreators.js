/*
* @Author: jjsnc
* @Date:   2019-11-14 22:35:14
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-16 18:07:16
*/
import * as constants from './constants';

import axios from 'axios';
import { fromJS } from 'immutable';

const chiangeList = (data)=> ({
	type: constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage: Math.ceil(data.length / 10)
})





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





export const getList = ()=> {
	return (dispatch)=> {
	axios.get('/api/headerList.json').then((res)=> {
       const data  = res.data.data;
       const action = chiangeList(data)
       dispatch(action)
	}).catch((e)=>{
		console.log(e)
	})
	}
}
