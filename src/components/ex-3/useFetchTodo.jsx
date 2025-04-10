import React, { useEffect, useState } from "react";

export const useFetchTodo = () => {
  const [todos, setTodos] = useState([]); // Declare the state for todos
  const fetchTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsondata = await res.json();
    setTodos(jsondata);
  };

  useEffect(() => {
    fetchTodo();    
  }, []);

  return todos;
};

