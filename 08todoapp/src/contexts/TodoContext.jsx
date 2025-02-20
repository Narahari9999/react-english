import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      todo: "First Todo",
      completed: false,
    },
  ]);

  function addTodo(todo) {}

  function updateTodo(id, todo) {}

  function deleteTodo(id) {}

  function toggleComplete(id) {}

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;
