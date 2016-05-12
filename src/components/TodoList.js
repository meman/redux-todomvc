import React,{Component,PropTypes} from 'react';
import Todo from './Todo';

export default class ListTodos extends Component {
  render(){
    return (
      <ul className='todos-list'>
        {this.props.todos.map((todo)=>{
          return <Todo
          key={todo.get('id')}
          text={todo.get('text')}
          id={todo.get('id')}
          isComplete={todo.get('completed')}
          onClickRemove ={this.props.removeTodo}
          onUpdateTodo = {this.props.updateTodo}
          onToggleCompleted = {this.props.toggleCompleted}
          ></Todo>;
        })}
      </ul>
    );
  }
}
