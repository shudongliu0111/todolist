import React from 'react'
class TodoItem extends React.Component{
	handleDelete(e){
		this.props.delete(this.props.index)
		// console.log(123);
		// console.log(this.props.index);
	}
	render(){
		// 解构赋值
		const {content} = this.props; 
		return (
			<div onClick={this.handleDelete.bind(this)}>{content}</div>
		)
	}
}

export default TodoItem;