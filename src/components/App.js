import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddTodo = todoInput => {

    // writing to state
    this.setState({todos: [...this.state.todos,{
      id: uuid(),
      title: todoInput,
      completed: false
    }]})
  };

  handleComplete = id => {
    // temp array to loop through and modify
    const stateTodos = this.state.todos;
    let tempTodos = stateTodos.map(todo => {
      if(todo.id === id){
       todo.completed = true;
      } 
      return todo
    });

    // writing to the state
    this.setState ({ todos: tempTodos});
  };

  handleDelete = id => {
    // temp array to loop through and modify
    const stateTodos = this.state.todos;
    let tempTodos = stateTodos.filter(todo => {
      if(todo.id !== id){
       return true;
      } 
      return false
    });

    // writing to the state
    this.setState ({ todos: tempTodos});
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <AddTodo  
            handleAddTodo={this.handleAddTodo}
          />
          <TodoList
            todos={this.state.todos}
            handleComplete={this.handleComplete}
            handleDelete={this.handleDelete}
          />
          </div>
      </div>
    );
  }
}

export default App;
