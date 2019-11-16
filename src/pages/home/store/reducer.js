/*
* @Author: jjsnc
* @Date:   2019-11-16 17:03:49
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-16 17:58:30
*/
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [
     {id:1,title: "社会热点",imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}
	],
	articleList: [
	{
      id:1,
      title:"向死而生",
      desc: '应巴西联邦共和国总统博索纳罗邀请，国家主席习近平赴巴西出席在巴西利亚举行的金砖国家领导人第十一次会晤。这是习近平10年来，第3次到访桑巴国度，也是他连续第7次出席金砖国家领导人会晤。',
      imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"

	},
	{
      id:1,
      title:"向死而生",
      desc: '应巴西联邦共和国总统博索纳罗邀请，国家主席习近平赴巴西出席在巴西利亚举行的金砖国家领导人第十一次会晤。这是习近平10年来，第3次到访桑巴国度，也是他连续第7次出席金砖国家领导人会晤。',
      imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"

	}	

	],
	recommendList: [{
      id:1,
      imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
	},
    {
      id:2,
      imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
	}
	],
	articlePage: 1,
	showScroll: false
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
	});
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
		default:
			return state;
	}
}