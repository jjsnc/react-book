import React ,{Component,Fragment}from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styleCommon.js'
import { GlobalStyleFont} from "./statics/iconfont/iconfont.js"
import store from './store';
import Header from './common/header/'

class App extends  Component{
  render(){
   return (
   	<Provider store={store}>
     <Fragment>
       <GlobalStyle />
       <GlobalStyleFont/>
       <Header></Header> 
       </Fragment>
       </Provider>  
     );
  }
}
export default App;
