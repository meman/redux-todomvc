import React from 'react';
import * as TodoActions from '../actions/todos';
import * as FilterActions from '../actions/Filter';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import '../style/main.scss';

export default class App extends React.Component {
  render(){
    const {actions,todos,filter} = this.props;
    return (
      <div className='todo-app'>
        <h1>Todos</h1>
        <Header addTodo ={actions.addTodo}>
        </Header>
        <MainSection todos={todos} filter={filter} actions={actions}></MainSection>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter:state.get('Filter')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},TodoActions,FilterActions),dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
