import {combineReducers} from 'redux-immutable';
import todos from './todos';
import Filter from './Filter';
import {Map} from 'immutable';

const rootReducer = combineReducers({
  todos,
  Filter
});

export default rootReducer;
