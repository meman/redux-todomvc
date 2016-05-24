export function addTodo(text) {
  return { type: 'ADD_TODO', text };
}

export function toggleCompleted(id) {
  return { type: 'TOGGLE_COMPLETED', id };
}

export function removeTodo(id) {
  return { type: 'REMOVE_TODO', id };
}

export function completeAll() {
  return { type: 'COMPLETE_ALL'};
}

export function removeCompleted(){
  return {type:'REMOVE_COMPLETED'};
}

export function updateTodo(id,text) {
  return { type: 'UPDATE_TODO', id,text };
}
