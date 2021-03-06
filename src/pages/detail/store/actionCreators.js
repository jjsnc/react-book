/*
* @Author: jjsnc
* @Date:   2019-11-17 10:22:39
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 10:50:55
*/


import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			dispatch(changeDetail(result.title, result.content));
		}).catch(() => {
			
		})
	}
};