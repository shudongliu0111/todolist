import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; //默认样式可以不用
import TodoList from './TodoList';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
ReactDOM.render(<TodoList />, document.getElementById('root'));
// registerServiceWorker();  //暂时不用 import也注释了
