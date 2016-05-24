import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import todoReducer from '../src/reducers/todos';

describe('todoReducer.addTodo',()=>{
  it('Handle adding the a new todo to empty list',()=>{
    const initalState = List();
    const action = {
      type:'ADD_TODO',
      text:'sample text'
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
      {id:1,text:'sample text',completed:false}
    ]));
  });
  it('handle adding a new todo to a existing list',()=>{
    const initalState = fromJS([{id:1,text:'react',completed:false}]);
    const action = {
      type:'ADD_TODO',
      text:'sample text'
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
      {id:1,text:'react',completed:false},
      {id:2,text:'sample text',completed:false}
    ]));
  });
  it('Handle when a attemping to add a todo that is blank',()=>{
    const initalState = fromJS([{id:1,text:'react',completed:false}]);
    const action = {
      type:'ADD_TODO',
      text:''
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
      {id:1,text:'react',completed:false}
    ]));
  });
  it('Handle when a attemping to add a todo that is undefined',()=>{
    const initalState = fromJS([{id:1,text:'react',completed:false}]);
    const action = {
      type:'ADD_TODO',
      text:undefined
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
      {id:1,text:'react',completed:false}
    ]));
  });
});

describe('todoReducer.removeTodo',()=>{
  it('remove todo from list given the id',()=>{
    const initalState = fromJS([{id:1,text:'react',completed:false}]);
    const action = {
      type:'REMOVE_TODO',
      id:1
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(List());
  });
  it('return current state if id is not found',()=>{
    const initalState = fromJS([{id:1,text:'react',completed:false}]);
    const action = {
      type:'REMOVE_TODO',
      id:2
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(initalState);
  });
  it('return current state if id is undefined',()=>{
    const initalState = fromJS([{id:1,text:'react',completed:false}]);
    const action = {
      type:'REMOVE_TODO',
      id:undefined
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(initalState);
  });
});

describe('todoReducer.updateTodo',()=>{
  it('handle taking a id and text and updating a todo',()=>{
    const initalState = fromJS([{id:1,text:'react',completed:false}]);
    const action = {
      type:'UPDATE_TODO',
      id:1,
      text:'sample'
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([{id:1,text:'sample',completed:false}]));
  });
});

describe('todoReducer.toggleCompleted',()=>{
  it('handles changing the completed state of a todo from false to true',()=>{
    const initalState = fromJS([
        {id:1,text:'react',completed:true},
        {id:2,text:'sample',completed:false},
        {id:3,text:'random',completed:false}
      ]
    );
    const action = {
      type:'TOGGLE_COMPLETED',
      id:2
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
          {id:1,text:'react',completed:true},
          {id:2,text:'sample',completed:true},
          {id:3,text:'random',completed:false}
        ]));
  });
  it('handles changing the completed state of a todo from true to false',()=>{
    const initalState = fromJS([
        {id:1,text:'react',completed:true},
        {id:2,text:'sample',completed:false},
        {id:3,text:'random',completed:false}
      ]
    );
    const action = {
      type:'TOGGLE_COMPLETED',
      id:1
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
          {id:1,text:'react',completed:false},
          {id:2,text:'sample',completed:false},
          {id:3,text:'random',completed:false}
        ]
      ));
  });
});

describe('todoReducer.completeAll',()=>{
  it('handles changing all todos completed state to true',()=>{
    const initalState = fromJS([
        {id:1,text:'react',completed:true},
        {id:2,text:'sample',completed:false},
        {id:3,text:'random',completed:false}
      ]
    );
    const action = {
      type:'COMPLETE_ALL'
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
          {id:1,text:'react',completed:true},
          {id:2,text:'sample',completed:true},
          {id:3,text:'random',completed:true}
        ]
      ));
  });
  it('handles changing all todos completed state to false if all are already true',()=>{
    const initalState = fromJS([
        {id:1,text:'react',completed:true},
        {id:2,text:'sample',completed:true},
        {id:3,text:'random',completed:true}
      ]
    );
    const action = {
      type:'COMPLETE_ALL'
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
          {id:1,text:'react',completed:false},
          {id:2,text:'sample',completed:false},
          {id:3,text:'random',completed:false}
        ]
      ));
  });
});

describe('todoReducer.removeCompleted',()=>{
  it('handles removeing all completed todos',()=>{
    const initalState = fromJS([
        {id:1,text:'react',completed:true},
        {id:2,text:'sample',completed:false},
        {id:3,text:'random',completed:true}
      ]
    );
    const action = {
      type:'REMOVE_COMPLETED'
    };
    const newState = todoReducer(initalState,action);
    expect(newState).to.equal(fromJS([
          {id:2,text:'sample',completed:false}
        ]
      ));
  });
});
