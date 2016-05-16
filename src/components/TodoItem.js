import React,{Component,PropTypes} from 'react';
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
    return (<li>
      <input type="checkbox" value={completed} onClick={(e)=>this.props.toggleCompleted(id)}/>
      {this.state.isEditing ?
        <TodoTextInput text={text} onSave={(text)=>this._handleSave(text)}></TodoTextInput> :
        <label onDoubleClick={this._handleEditing}>{text}</label>
      }
      <button onClick={(e)=>this.props.removeTodo(id)}>X</button>
    </li>);
  }
}

// TodoItem.propTypes = {
//   todo:ImmutablePropTypes.mapOf({
//       id:PropTypes.number.isRequired,
//       text:PropTypes.string.isRequired,
//       completed:PropTypes.bool.isRequired
//   }).isRequired
//
// };

export default TodoItem;
