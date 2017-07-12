import React from 'react';
import uniqueId from '../../util/unique_id';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: '', done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = this.state;
    newTodo.id = uniqueId();
    console.log(newTodo);
    this.props.createTodo(newTodo).then(
      () => this.setState({ title: '', body: ''})
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value});
  }

  render() {
    return (
      <div>
        <h2>Create a new todo item!</h2>
        <form onSubmit={this.handleSubmit}>

          <label>Title
          <input
            onChange={this.update("title")}
            type="text"
            value={this.state.title}>
          </input>
          </label>

          <br/>

          <label>Body
          <input
            type="text"
            onChange={this.update("body")}
            value={this.state.body}>
          </input>
          </label>

          <input
            type="hidden"
            value={this.state.done}>
          </input>

          <br/>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
