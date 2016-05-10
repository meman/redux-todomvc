import {Map} from 'immutable';

function setState(state,newState) {
  return state.merge(newState);
}

function addTodo(state,text){
  if(!text){
    return state;
  }
  const todoID = state.get('todos').reduce((id,item)=>{return Math.max(id,item.get('id'));},0) + 1;
  const newTodo = Map({id:todoID,text,completed:false});
  return state.update('todos', (todos) => todos.push(newTodo));
}

function removeTodo(state,id){
  return state.update('todos',(todos)=>{
    return todos.filter((todo)=>{
      return todo.get('id') !== id;
    });
  });
}

// function toggleCompleted(state,id){
//   return state.update('todos',(todos)=>{
//     return todos.filter((todo)=>{
//       if(todo.id)
//     });
//   });
// }

export default function(state, action) {
  state = !state ? Map() : state ;
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'ADD_TODO':
      return addTodo(state,action.text);
    case 'REMOVE_TODO':{
      return removeTodo(state,action.id);
    }
  }
  return state;
}
