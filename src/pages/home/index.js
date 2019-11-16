/*
* @Author: jjsnc
* @Date:   2019-11-16 15:29:37
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-16 17:09:04
*/
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';


import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';


class Home extends PureComponent {


	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
			     	<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
				    <Recommend />
					 <Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

}



export default connect(null, null)(Home);
