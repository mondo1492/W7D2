import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
      <ul>
        {todos.map(todo => <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={this.props.removeTodo}
          />)}
      </ul>
      <TodoForm createTodo={this.props.createTodo} />
      </div>
    );
  }
}

export default TodoList;
