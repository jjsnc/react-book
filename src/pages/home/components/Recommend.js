/*
* @Author: jjsnc
* @Date:   2019-11-16 16:04:39
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-16 17:55:00
*/

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);