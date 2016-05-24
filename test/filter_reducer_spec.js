import {expect} from 'chai';
import filterReducer from '../src/reducers/Filter';

describe('Filter.changeFilter',()=>{
  it('Handle changing the visable todo filter',()=>{
    const initalState = 'ALL';
    const action = {
      type:'CHANGE_FILTER',
      text:'ACTIVE'
    };
    const newState = filterReducer(initalState,action);
    expect(newState).to.equal('ACTIVE');
  });
  it('Handle if the send filter is not in the allow list',()=>{
    const initalState = 'ALL';
    const action = {
      type:'CHANGE_FILTER',
      text:'grr'
    };
    const newState = filterReducer(initalState,action);
    expect(newState).to.equal('ALL');
  });
});
