import React from "react";
import Todo from "./Todo";

export default props => {
  return (
    <div className="list">
      <h4 className="center">Your Todo(s)</h4>
      {props.todos.length === 0 && <p>Please add a todo to get started!</p>}
      {props.todos.map(todo => (
        <Todo 
          key={todo.id}
          todo={todo}
          handleComplete={props.handleComplete}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};
