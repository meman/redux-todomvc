import React,{Component,PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class TodoTextInput extends Component {
  constructor(props){
    super(props);
    this.state = {value:this.props.text || ''};
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  _handleKeyDown(e){
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(e.target.value);
      this.setState({value:''});
    }
  }
  _handleBlur(e){
    if(!this.props.newTodo){
      this.props.onSave(e.target.value);
    }
  }
  render(){
    return <input type="text"
    className='todo-text-input'
    value={this.state.value}
    onChange={(e)=>this.setState({value:e.target.value})}
    onBlur={this._handleBlur.bind(this)}
    onKeyDown={this._handleKeyDown.bind(this)}
    placeholder = {this.props.placeholder}
    autoFocus = {this.props.focus}
    />;
  }
}

export default TodoTextInput;
