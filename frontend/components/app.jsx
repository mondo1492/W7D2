import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';
import allTodos from '../reducers/selectors';

export const App = () => {
  return (
    <div>
      <h1>Sweeet</h1>
      <TodoListContainer />
    </div>
  );
};
