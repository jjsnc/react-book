import React ,{Component}from 'react';

import {Wrapper, Title } from './style'
import {GlobalStyle} from './styleCommon.js'
class App extends  Component{
  render(){
   return (
     <div>
       <GlobalStyle  whiteColor>  </GlobalStyle>
       <Wrapper>
         <Title>
          Hello World!
          <ul>
            <li>001</li>
            <li>002</li>
            <li>003</li>
          </ul>
         </Title>
       </Wrapper>
       </div>
     );
  }
}
export default App;
