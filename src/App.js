import React ,{Component,Fragment}from 'react';

import { GlobalStyle } from './styleCommon.js'
import { GlobalStyleFont} from "./statics/iconfont/iconfont.js"

import Header from './common/header/'

class App extends  Component{
  render(){
   return (
     <Fragment>
       <GlobalStyle />
       <GlobalStyleFont/>
       <Header></Header> 
       </Fragment>
     );
  }
}
export default App;
