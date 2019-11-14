/*
* @Author: jjsnc
* @Date:   2019-11-13 17:07:44
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-13 20:14:43
*/

import React, { Component } from 'react';
import { SearchWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style.js'
class Header extends Component {

	render() {
		return (
			<HeaderWrapper>
				<Logo href="./" />
				<Nav >
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<NavSearch></NavSearch>
						<span className="iconfont">&#xe62a;</span>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<span className="iconfont">&#xe604;</span>
						写文章
				 </Button>
					<Button className='reg'>注册</Button>
				</Addition>

			</HeaderWrapper>
		)
	}
}

export default Header