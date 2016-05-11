import React from 'react';
import * as Actions from '../actions/todos';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class Hello extends React.Component {
  render(){
    console.log(this.props);
    return (<div>hello</div>);
  }
}

function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export const HelloContainer =  connect(mapStateToProps,mapDispatchToProps)(Hello);
