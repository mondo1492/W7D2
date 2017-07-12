import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach( todo => {
        newState[todo.id] = todo;
      });
      return newState;

    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return merge({}, newTodo, state);

    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
