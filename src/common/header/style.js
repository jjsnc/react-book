/*
* @Author: jjsnc
* @Date:   2019-11-13 17:24:43
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-13 17:57:33
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
  `


 
