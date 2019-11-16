/*
* @Author: jjsnc
* @Date:   2019-11-13 17:07:44
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-16 11:26:11
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



class Header extends Component {
	getListArea(){
		const {totalPage, focused, list, page,handleMouseEnter,handleMouseLeave, mouseIn,handleChangePgae} = this.props
		const jsList= list.toJS()
		const pageList = []
      if (jsList.length) {
      	  for(let i = (page-1)* 10; i< page * 10; i++){
       	   console.log(jsList[i],'jsList[i]')
            pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
        }
      }
	if (focused || mouseIn) {
		return (
			<SearchInfo 
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch onClick={()=>handleChangePgae(page,totalPage) }>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
                    {pageList}
					</SearchInfoList>
				</SearchInfo>)
	}else {
		return null
	}
   }
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
						{this.getListArea()}
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
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
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
	 	},
	 	handleMouseEnter(){
	 		const action = actionCreators.mouseEnter()
	 		dispatch(action);
	 	},
	 	handleMouseLeave(){
	 		const action = actionCreators.mouseLeave()
	 		dispatch(action);
	 	},
	 	handleChangePgae(page, totalPage){
	 		if (page<totalPage) {
	 			page++
	 		}else{
	 			page =1
	 		}
	 		const action = actionCreators.changePage(page)
	 		dispatch(action);
	 	}
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Header);