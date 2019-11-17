/*
* @Author: jjsnc
* @Date:   2019-11-13 17:07:44
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 11:52:50
*/

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
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
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { connect } from 'react-redux';



class Header extends Component {
	getListArea(){
		const {totalPage, focused, list, page,handleMouseEnter,handleMouseLeave, mouseIn,handleChangePgae} = this.props
		const jsList= list.toJS()
		const pageList = []
      if (jsList.length) {
      	  for(let i = (page-1)* 10; i< page * 10; i++){
           jsList[i] &&  pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
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
					<SearchInfoSwitch onClick={()=>handleChangePgae(page,totalPage, this.spinIcon) }>
					<span ref={(spin)=>{this.spinIcon = spin }} className="iconfont spin">&#xe858;</span>
					换一批
					</SearchInfoSwitch>
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
		const {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props
		return (
			<HeaderWrapper>
				<Logo href="./" />
				<Nav >
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
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
						onFocus={()=>handleInputFocus(list)}
						onBlur={handleInputBlur}
						></NavSearch>
						</CSSTransition>
						<span  className={focused? 'focused iconfont zoom':'iconfont zoom'}>&#xe62a;</span>
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
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch)=> {
    return {
		handleInputFocus(list) {
			if (list.size===0) {
			   dispatch(actionCreators.getList())
			}
            dispatch(actionCreators.searchFocus())
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
	 	handleChangePgae(page, totalPage,spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
	 		if (page<totalPage) {
	 			page++
	 		}else{
	 			page =1
	 		}
	 		const action = actionCreators.changePage(page)
	 		dispatch(action);
	 	},
		logout() {
			dispatch(loginActionCreators.logout())
		}	 	
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Header);