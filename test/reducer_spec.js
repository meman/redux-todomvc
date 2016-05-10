import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer',()=>{
  it('Handles SET_STATE with norm js payload',()=>{
    const initalState = Map();
    const action = {
      type:'SET_STATE',
      state:{
        todos:[
          {id: 1, text: 'React', status: 'active'}
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
          {id: 1, text: 'React', status: 'active'}
        ]
      }
    };
    const newState = reducer(undefined,action);
    dexpect(newState).to.equal(fromJS(action.state));
  });
});
