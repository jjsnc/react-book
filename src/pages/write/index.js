/*
* @Author: jjsnc
* @Date:   2019-11-16 15:50:52
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 12:03:11
*/

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (loginStatus) {
			return (
				<div>写文章页面</div>
			)
		}else {
			return <Redirect to='/login'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);