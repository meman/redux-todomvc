import React from 'react';
import {addTodo} from '../actions/todos';
import AddTodo from '../containers/AddTodo';
import TodoListContainer from '../containers/TodoListContainer';
import '../style/main.scss';

export default class App extends React.Component {
  render(){
    return (
      <div className='todo-app'>
        <h1>Todos</h1>
        <AddTodo></AddTodo>
        <TodoListContainer></TodoListContainer>
      </div>
    );
  }
}

export default App;
