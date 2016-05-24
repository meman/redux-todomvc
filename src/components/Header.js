import React from 'react';
import TodoTextInput from '../components/TodoTextInput';

class Header extends React.Component {
  _handleSave(text){
    if(text.trim().length > 0 ){
      this.props.addTodo(text);
    }

  }
  render(){
    return <div className='todo-header'>
        <TodoTextInput
        newTodo
        onSave={this._handleSave.bind(this)}
        focus={false}
        placeholder='What needs to be done?'
        ></TodoTextInput>
    </div>;
  }
}

export default Header;
