import React,{Component} from 'react';

export default class ListTodos extends Component {
  render(){
    var todos = [];
    return (
      <ul className='todos-list'>
        {todos}
      </ul>
    );
  }
}
