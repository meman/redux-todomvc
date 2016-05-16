import React,{Component,PropTypes} from 'react';
import TodoItem from './TodoItem';
import ImmutablePropTypes from 'react-immutable-proptypes';

class TodoList extends Component {
  render(){
    return <ul className='todo-list'>
    {this.props.todos.map((todo)=>{
      return <TodoItem
      key = {todo.get('id')}
      todo={todo}
      toggleCompleted = {this.props.toggleCompleted}
      updateTodo = {this.props.updateTodo}
      removeTodo = {this.props.removeTodo}
      ></TodoItem>;
    })}
    </ul>;
  }
}

TodoList.propTypes = {
  todos:ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id:PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
      completed:PropTypes.bool.isRequired,
    })
  ).isRequired
};

export default TodoList;
