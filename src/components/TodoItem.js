import React,{Component,PropTypes} from 'react';
import ClassNames from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import ImmutablePropTypes from 'react-immutable-proptypes';

import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = {isEditing:false};
    this._handleEditing = this._handleEditing.bind(this);
    this._handleSave = this._handleSave.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  _handleEditing(){
    this.setState({isEditing:true});
  }
  _handleSave(text){
    var id = this.props.todo.get('id');
    if(text.length === 0){
      this.props.removeTodo(id);
    }else{
      this.props.updateTodo(id,text);
    }
    this.setState({isEditing:false});
  }
  render(){
    const {text,completed,id} = this.props.todo.toJS();
    const classes = ClassNames('todo-item',{'isEditing':this.state.isEditing});
    return (<li className={classes} >
      <input type="checkbox" checked={completed} onClick={(e)=>this.props.toggleCompleted(id)}/>
      {this.state.isEditing ?
        <TodoTextInput text={text} onSave={(text)=>this._handleSave(text)} focus={true}></TodoTextInput> :
        <label className='todo-text-input' onDoubleClick={this._handleEditing}>{text}</label>
      }
      <button className='remove-btn' onClick={(e)=>this.props.removeTodo(id)}>X</button>
    </li>);
  }
}

export default TodoItem;
