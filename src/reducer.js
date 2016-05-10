import {Map} from 'immutable';

function setState(state,newState) {
  return state.merge(newState);
}

export default function(state, action) {
  state = !state ? Map() : state ;
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
  }
  return state;
}
