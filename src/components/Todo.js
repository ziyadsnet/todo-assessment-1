import React from "react";

export default props => {
  return (
    <div
      className="item"
      style={{
        backgroundColor: props.todo.completed ? "#ccccff" : "#f0f5f5"
      }}
    >
      <div className="itemDescription">
        <span
          style={{
            textDecoration: props.todo.completed ? "line-through" : "none"
          }}
        >
          {props.todo.title}
        </span>
      </div>
      <div className="itemControls">
        <button
          onClick={e => {
            props.handleComplete(props.todo.id);
          }}
          disabled={props.todo.completed}
        >
          Complete
        </button>
        <button
          onClick={e => {
            props.handleDelete(props.todo.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
