/*
* @Author: jjsnc
* @Date:   2019-11-16 15:30:33
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 11:00:03
*/
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
  	return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
