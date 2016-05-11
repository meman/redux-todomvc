import {combineReducers} from 'redux-immutable';
import todos from './todos';
import {Map} from 'immutable';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
