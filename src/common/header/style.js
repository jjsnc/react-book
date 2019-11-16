/*
* @Author: jjsnc
* @Date:   2019-11-13 17:24:43
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-16 14:20:49
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

export const SearchWrapper = styled.div`
float:left;
position:relative;
.zoom {
  position:absolute;
  right:5px;
  bottom: 5px;
  width:30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  &.focused {
    background: #777;
    color:#fff;
  }
}
`

export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0,0,0,0.2);
`;


export const SearchInfoTitle = styled.div`
   margin-top:20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size:14px;
   color:#969696;
`;

export const  SearchInfoSwitch = styled.span`
   float: right;
   font-size:13px;
   .spin  {
     display:inline-block;
     font-size:12px;
     margin-right:10px;
     transition:all .2s ease-in;
     transform: rotate(0);
     transform-origin: center center;
`;

export const SearchInfoList = styled.div`
 overflow: hidden;
`


export const  SearchInfoItem = styled.a`
   display:inline-block;
   line-height:20px;
   padding: 0 5px;
   font-size:12px;
   border: 1px solid #ddd;
   color: #787878;
   border-radius: 2px;
   margin-right:10px;
   border-radius: 2px;
   margin-bottom:15px;
`;




export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
  height:38px;
  width:160px;
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
  padding:0 30px 0 20px;
  box-sizing: border-box;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
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





 
