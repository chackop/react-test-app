import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      tasks: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  handleDelete(index) {
    const newArr = [...this.state.tasks];
    newArr[index] = { ...newArr[index], done: true };

    this.setState({ tasks: newArr });
  }

  changeHandler(evt) {
    this.setState({ term: evt.target.value });
  }

  handleSubmit() {
    if (this.state.term === "") return;
    const newArr = [
      ...this.state.tasks,
      { term: this.state.term, done: false },
    ];
    this.setState({ tasks: newArr });
    this.setState({ term: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Item"
          value={this.state.term}
          onChange={this.changeHandler}
        />
        <button onClick={this.handleSubmit}>Add</button>
        <p>
          {this.state.tasks.length} remaining out of {this.state.tasks.length}
        </p>
        <ul>
          {this.state.tasks.map((todo, idx) => (
            <li
              key={todo.term + idx}
              id={todo.term + idx}
              onClick={() => this.handleDelete(idx)}
              styles={todo.done ? "color: red" : null}
            >
              {todo.term}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
