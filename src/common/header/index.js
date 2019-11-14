/*
* @Author: jjsnc
* @Date:   2019-11-13 17:07:44
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-15 00:23:40
*/

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SearchWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style.js'
import {searchFocus, searchBlur} from './store/actionCreators';
import { connect } from 'react-redux';
class Header extends Component {
	render() {
		const {focused, handleInputFocus, handleInputBlur} = this.props
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
					<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
						<NavSearch
						className={focused? 'focused':''}
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						></NavSearch>
						</CSSTransition>
						<span  className={focused? 'focused iconfont':'iconfont'}>&#xe62a;</span>
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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch)=> {
    return {
		handleInputFocus() {
			const action = searchFocus();
	    	dispatch(action)
		},
		handleInputBlur(){
			const action = searchBlur()
			dispatch(action);
	 	}
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Header);