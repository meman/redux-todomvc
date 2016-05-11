import {Map,List} from 'immutable';

function addTodo(state,text){
  if(!text){
    return state;
  }
  const todoID = state.reduce((id,item)=>{return Math.max(id,item.get('id'));},0) + 1;
  const newTodo = Map({id:todoID,text,completed:false});
  return state.update((todos) => todos.push(newTodo));
}

function removeTodo(state,id){
  return state.update((todos)=>{
    return todos.filterNot(todo=> todo.get('id') === id);
  });
}

function toggleCompleted(state,id){
  const index = state.findIndex((todo)=>{return todo.get('id') === id;});
  const updatedTodo = state.get(index).update('completed',completed => !completed);
  return state.update(todos=> todos.set(index,updatedTodo));
}

export default function(state, action) {
  state = !state ? List() : state ;
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state,action.text);
    case 'REMOVE_TODO':
      return removeTodo(state,action.id);
    case 'TOGGLE_COMPLETED':
      return toggleCompleted(state,action.id);
    default:
      return state;
  }
  return state;
}
