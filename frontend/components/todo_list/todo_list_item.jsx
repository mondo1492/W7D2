import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const todo = this.props.todo;
    console.log(todo);
    return (
      <div>
        <li>{todo.title} </li>
        <button type='button' onClick={this.handleClick}>Remove Todo</button>
      </div>

    );
  }
}

export default TodoListItem;
