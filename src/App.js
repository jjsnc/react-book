import React ,{Component,Fragment}from 'react';

import {Wrapper, Title } from './style'
import {GlobalStyle} from './styleCommon.js'
class App extends  Component{
  render(){
   return (
     <Fragment>
       <GlobalStyle /> 
       <div>123</div>
{      <Wrapper>
         <Title>
          Hello World!
          <ul>
            <li>001</li>
            <li>002</li>
            <li>003</li>
          </ul>
         </Title>
         </Wrapper>}
       </Fragment>
     );
  }
}
export default App;
