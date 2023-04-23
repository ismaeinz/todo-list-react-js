import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleForm}>
      <input
        type="text"
        placeholder="update task"
        className="todo-input"
        onChange={handleChange}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
