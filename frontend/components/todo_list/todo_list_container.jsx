import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions';



const MapStateToProps = ( state ) => ({
  todos: allTodos(state),
  state
});

const MapDispatchToProps = ( dispatch ) => ({ // v3
  receiveTodos: () => dispatch(receiveTodos()),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(MapStateToProps, MapDispatchToProps)(TodoList);
