/*
* @Author: jjsnc
* @Date:   2019-11-13 17:24:43
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-13 20:13:12
*/

import styled  from 'styled-components'

import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height:58px;
    border:1px solid #dedede;
  `;


  export const Logo = styled.a`
   position: absolute;
   top:0;
   left: 0;
   display:inline-block;
   width:100px;
   height: 56px;
   border-botton: 1px solid #f0f0f0;
   background:url(${logoPic});
   background-size: contain;
  `

  export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right: 70px;
    box-sizing:border-box;
  `

  export const NavItem = styled.div`
  height:56px;
  line-height: 56px;
  color:#333;
   &.left{
   	float:left;
   }
   &.right{
   	float: right;
   	color:#969696
   }
   &.active {
   	 color: #ea6f5a
   }
  `


export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
  height:38px;
  width:106px;
  border:none;
  outline: none;
  line-height: 56px;
  color:#333;
  display:inline-block;
  border-radius :19px;
  background: #eee;
  font-size:14px;
  margin-left: 20px
  margin-top:9px;
  padding:0 20px;
  box-sizing: border-box;
  &.::placeholder:{
  	color: #999;
  }
  `

  export const Addition = styled.div`
   position: absolute;
   top:0;
   right:0;
  `

  export const Button = styled.div`
   float:right;
   line-height:38px;
   border-radius:19px;
   margin-top:9px;
   border:1px solid #ec6149;
   margin-right: 20px;
   padding:  0 20px;
   font-size:14px;
   &.reg{
       color: #ec6149;
   }
   &.writting{
   	color:#fff;
   	background: #ec6149;

   }
  `



 
