/*
* @Author: jjsnc
* @Date:   2019-11-13 17:07:44
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-15 18:02:14
*/

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SearchWrapper,
  HeaderWrapper,
   Logo,
   Nav,
   NavItem, 
   NavSearch, 
   Addition, 
   Button,
   SearchInfo,
   SearchInfoTitle,
   SearchInfoSwitch,
   SearchInfoItem ,
   SearchInfoList
} from './style.js'
import { actionCreators } from './store';
import { connect } from 'react-redux';

const getListArea  = (show,list)=> {
	if (show) {
		return (
			<SearchInfo>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
                    { list.map((item)=> {
                    	return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                    })}
					</SearchInfoList>
				</SearchInfo>)
	}else {
		return null
	}
}

class Header extends Component {
	render() {
		const {focused, handleInputFocus, handleInputBlur,list} = this.props
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

						{getListArea(focused,list)}
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
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list'])
  }
}

const mapDispatchToProps = (dispatch)=> {
    return {
		handleInputFocus() {
		const action = actionCreators.searchFocus();
	    dispatch(action)
	    dispatch(actionCreators.getList())
		},
		handleInputBlur(){
			const action = actionCreators.searchBlur()
			dispatch(action);
	 	}
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Header);