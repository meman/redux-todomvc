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
  render(){
    return <input type="text"
    value={this.state.value}
    onChange={(e)=>this.setState({value:e.target.value})}
    onBlur={(e)=>this.props.onSave(e.target.value)}
    onKeyDown={this._handleKeyDown.bind(this)}
    autoFocus
    />;
  }
}

export default TodoTextInput;
