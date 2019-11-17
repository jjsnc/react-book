/*
* @Author: jjsnc
* @Date:   2019-11-16 15:29:51
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 10:43:21
*/


import React, {PureComponent} from 'react'

import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'

import {DetailWrapper, Header, Content} from './style'

import {actionCreators} from './store'


class Detail extends PureComponent {
	render(){
		const  {title, content} = this.props
		return(
         <DetailWrapper>
         	<Header>{title}</Header>
         	<Content 
             	dangerouslySetInnerHTML={{__html: content}}
         	/>
         </DetailWrapper>
  
		)
	}
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id)
	}
}

const mapState=(state)=>({
	title:state.getIn(['detail','title']),
	connect: state.getIn(['detail', 'connect'])
})

const mapDispatch=(dispatch)=>({
	getDetail(id){
		dispatch(actionCreators.getDetail(id))
	}
})

export default connect(mapState, mapDispatch)(withRouter(Detail))






