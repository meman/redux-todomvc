import React,{Component,PropTypes} from 'react';
import ClassNames from 'classnames';

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing:false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.stopEdit = this.stopEdit.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  handleEdit(){
    this.setState({isEditing:true});
    this._input.value=this.props.text;
    this._input.focus();
  }
  saveEdit(event){
    if(this.state.isEditing){
      const {title} = this.props;
      const input = event.target.value.trim();
      if(input.length && title !== input){
        this.props.onUpdateTodo(this.props.id,input);
      }
      this.stopEdit();
    }
  }
  stopEdit(){
    this.setState({isEditing:false});
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
      this.saveEdit(event);
    }
    else if (event.keyCode === 27) {
      this.stopEdit();
    }
  }
  render(){
    return (
      <li className={
        ClassNames('todo',{'editing':this.state.isEditing},{'completed':this.props.isComplete})}>
        <input type="checkbox" checked={this.props.isComplete} onClick={(e)=>{
          this.props.onToggleCompleted(this.props.id);
        }}/>
          <input type="text" className='text-update' onBlur={this.saveEdit} onKeyUp={this.onKeyUp} ref={(c) => this._input = c}/>
          <label htmlFor="" onDoubleClick={this.handleEdit}>{this.props.text}</label>
        <button onClick={(e)=>{this.props.onClickRemove(this.props.id);}}>x</button>
      </li>
    );
  }
}
