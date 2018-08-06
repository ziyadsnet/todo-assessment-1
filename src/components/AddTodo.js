import React from "react";

export default (props) => {
  // prevent default and empty lines locally for now
  const handleAddTodo = e => {
    e.preventDefault();
    
    const todoInput = e.target.elements.todo.value.trim();
    
    if (!todoInput) {
      return;
    }
    props.handleAddTodo(todoInput);
    e.target.elements.todo.value = "";
  };

  return (
    <div className="addTodo">
      <h1>To-Do App</h1>
      
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" />
        <button>Add To-Do</button>
      </form>
    </div>
  )
}

