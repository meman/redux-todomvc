import React from 'react';
import {addTodo} from '../actions/todos';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
  render(){
    let input;
    return (
      <form className='add-todo' onSubmit={(e)=>{
        e.preventDefault();
        if(!input.value){
          return;
        }
        this.props.dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input type="text" placeholder='What needs to be done?' ref={(node)=>{input =node;}}/>
      </form>
    );
  }
}

export default connect()(AddTodo);
