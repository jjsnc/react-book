/*
* @Author: jjsnc
* @Date:   2019-11-13 17:07:44
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-13 17:55:31
*/
 
 import React, { Component} from 'react';
import {HeaderWrapper ,Logo, Nav} from './style.js'
 class Header extends Component {

     render(){
     	return (
     		<HeaderWrapper>
     		 <Logo href="./" /> 
     		 <Nav />
           </HeaderWrapper>
     	)
     }
 }

 export default Header