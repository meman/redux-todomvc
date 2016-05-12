// import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleCompleted,removeTodo,updateTodo} from '../actions/todos';

const mapStateToProps = (state) => {
  return {
    todos: state.get('todos')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeTodo(id)),
    toggleCompleted:(id)=>dispatch(toggleCompleted(id)),
    updateTodo:(id,text) =>dispatch(updateTodo(id,text))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
