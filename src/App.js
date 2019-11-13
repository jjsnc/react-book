import React ,{Component,Fragment}from 'react';

import {GlobalStyle} from './styleCommon.js'

import Header from './common/header/'

class App extends  Component{
  render(){
   return (
     <Fragment>
       <GlobalStyle />
       <Header></Header> 
       </Fragment>
     );
  }
}
export default App;
