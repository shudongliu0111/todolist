import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  /*
    构造函数 初始化就有
    state 可以储存数据
  */
  constructor(props){
    super(props);
    this.state = {
      list:[
        'render只能返回一个jsx 也就是只有一个div不能返回两个',
        '要将两个都放在一个div中aaa',
        'handleBtnClick方法中的this 是指向这个方法而不是这个组件',
        '需要bind（this）来绑定this 注意一下',
        '...是展开运算符'
      ],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handelDelete = this.handelDelete.bind(this);  // 原来写在 下面组件中 性能优化
  } 
  handleBtnClick(){
    // this.state.list.push('这是无法改变state的')；
    if(this.state.inputValue ===''){
      alert("为空？？");
    }
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
    
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  // 拆分组件后不需要
  // handleItemClick(index){
  //   // console.log(index);  创建一个副本来操作
  //   const list = [...this.state.list]
  //   list.splice(index, 1);   
  //   this.setState({
  //     // list:list  如果键和值是相同的 可以直接写
  //     list
  //   })
  // }
  handelDelete(index){
    const list = [...this.state.list]
    list.splice(index, 1);   
    this.setState({
      // list:list  如果键和值是相同的 可以直接写
      list
    })
    console.log(index);
  }
  getTodoList(){
    return(
      this.state.list.map((item,index) => {
        return <TodoItem key={index} delete={this.handelDelete} content={item} index={index}/>
        // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
        // 组件的拆分
      })
    )
  }

  render() {
    return (
      <div className="TodoList">
          <div>
            <input value ={this.state.inputValue} onChange={this.handleInputChange}/>
            <button className= 'red-btn' onClick={this.handleBtnClick}>add</button>
          </div>
          <div>
            <ul>
              { // 简化 提取成方法
                this.getTodoList() 
              }
            </ul>
          </div>
      </div>
    );
  }
}

export default TodoList;
