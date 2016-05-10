import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer.setState',()=>{
  it('Handles SET_STATE with norm js payload',()=>{
    const initalState = Map();
    const action = {
      type:'SET_STATE',
      state:{
        todos:[
          {id: 1, text: 'React', completed: false}
        ]
      }
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(fromJS(action.state));
  });
  it('Handles SET_STATE without a initalState',()=>{
    const action = {
      type:'SET_STATE',
      state:{
        todos:[
          {id: 1, text: 'React', completed: false}
        ]
      }
    };
    const newState = reducer(undefined,action);
    expect(newState).to.equal(fromJS(action.state));
  });
});

describe('reducer.addTodo',()=>{
  it('Handle adding the a new todo to empty list',()=>{
    const initalState = fromJS({
      todos:[]
    });
    const action = {
      type:'ADD_TODO',
      text:'sample text'
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(fromJS({todos:[
      {id:1,text:'sample text',completed:false}
    ]}));
  });
  it('handle adding a new todo to a existing list',()=>{
    const initalState = fromJS({
      todos:[
        {id:1,text:'react',completed:false}
      ]
    });
    const action = {
      type:'ADD_TODO',
      text:'sample text'
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(fromJS({todos:[
      {id:1,text:'react',completed:false},
      {id:2,text:'sample text',completed:false}
    ]}));
  });
  it('Handle when a attemping to add a todo that is blank',()=>{
    const initalState = fromJS({
      todos:[
        {id:1,text:'react',completed:false}
      ]
    });
    const action = {
      type:'ADD_TODO',
      text:''
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(fromJS({todos:[
      {id:1,text:'react',completed:false}
    ]}));
  });
  it('Handle when a attemping to add a todo that is undefined',()=>{
    const initalState = fromJS({
      todos:[
        {id:1,text:'react',completed:false}
      ]
    });
    const action = {
      type:'ADD_TODO',
      text:undefined
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(fromJS({todos:[
      {id:1,text:'react',completed:false}
    ]}));
  });

});

describe('reducer.removeTodo',()=>{
  it('remove todo from list given the id',()=>{
    const initalState = fromJS({
      todos:[
        {id:1,text:'react',completed:false}
      ]
    });
    const action = {
      type:'REMOVE_TODO',
      id:1
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(fromJS({todos:[]}));
  });
  it('return current state if id is not found',()=>{
    const initalState = fromJS({
      todos:[
        {id:1,text:'react',completed:false}
      ]
    });
    const action = {
      type:'REMOVE_TODO',
      id:2
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(initalState);
  });
  it('return current state if id is undefined',()=>{
    const initalState = fromJS({
      todos:[
        {id:1,text:'react',completed:false}
      ]
    });
    const action = {
      type:'REMOVE_TODO',
      id:undefined
    };
    const newState = reducer(initalState,action);
    expect(newState).to.equal(initalState);
  });
});
