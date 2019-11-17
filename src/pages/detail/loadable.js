/*
* @Author: jjsnc
* @Date:   2019-11-16 15:30:33
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 10:45:57
*/
/*
* @Author: jjsnc
* @Date:   2019-11-16 15:29:37
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-16 15:41:14
*/
import React from 'react';

import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
	loader:()=>import('./'),
	loading(){
		return <div>正在加载</div>
	}
})


export default ()=> <LoadableComponent />