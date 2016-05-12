import React from 'react';
import {addTodo} from '../actions/todos';
import AddTodo from '../containers/AddTodo';
import ListTodos from './ListTodos';
import '../style/main.scss';

export default class App extends React.Component {
  render(){
    return (
      <div className='todo-app'>
        <h1>Todos</h1>
        <AddTodo></AddTodo>
        <ListTodos></ListTodos>
      </div>
    );
  }
}

export default App;
