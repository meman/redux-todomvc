// import {Map,List} from 'immutable';

function changeFilter(state,filter){
  const AllowValues = ['ALL','ACTIVE','COMPLETED'];
  return AllowValues.indexOf(filter.toUpperCase()) > -1 ? filter : state;
}

export default function(state, action) {
  state = !state ? 'ALL' : state ;
  switch (action.type) {
    case 'CHANGE_FILTER':
      return changeFilter(state,action.text);
    default:
      return state;
  }
}
