import React ,{Component,Fragment}from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './styleCommon.js'
import { GlobalStyleFont} from "./statics/iconfont/iconfont.js"
import store from './store';
import Header from './common/header/'

import Home from './pages/home';
import Detail from './pages/detail/';
// import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';


class App extends  Component{
  render(){
   return (
   	<Provider store={store}>
    <BrowserRouter>
      <Fragment>
          <GlobalStyle />
          <GlobalStyleFont/>
          <Header /> 
           <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>              
           </div>
        </Fragment>
       </BrowserRouter>
       </Provider>  
     );
  }
}
export default App;
