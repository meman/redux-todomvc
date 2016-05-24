import React,{Component} from 'react';
import TodoList from './TodoList';
import Footer from './Footer';

class MainSection extends Component {
  _renderCompleteAllToggle(todos,completedCount){
    const {completeAll} = this.props.actions;
    if(todos.size >0){
      return <input type="checkbox" className='todo-complete-all' checked={todos.size === completedCount} onClick={completeAll}/>;
    }
  }
  _renderFooter(todos,completedCount){
    const {removeCompleted,changeFilter} = this.props.actions;
    if(todos.size){
      return <Footer
      activeCount ={todos.size - completedCount}
      completedCount = {completedCount}
      removeCompleted = {removeCompleted}
      changeFilter={changeFilter}
      >
      </Footer>;
    }
  }
  _filterTodos(){
    const {todos,filter} = this.props;
    let filteredTodos;
    switch (filter) {
      case 'ACTIVE':
        filteredTodos = todos.filter((todo)=>todo.get('completed') === false);
        break;
      case 'COMPLETED':
        filteredTodos = todos.filter((todo)=>todo.get('completed') === true);
        break;
      default:
      filteredTodos = todos;

    }
    return filteredTodos;

  }
  render(){
    const {actions,todos,filter} = this.props;
    const visableTodos = this._filterTodos();
    const completedCount = todos.reduce((count,todo)=>{
      return todo.get('completed') ? count + 1 : count;
    },0);
    return <div className='todo-body'>
    {this._renderCompleteAllToggle(todos,completedCount)}
    <TodoList todos={visableTodos} toggleCompleted = {actions.toggleCompleted} updateTodo = {actions.updateTodo} removeTodo = {actions.removeTodo}></TodoList>

    {this._renderFooter(todos,completedCount)}
    </div>;
  }
}

export default MainSection;
