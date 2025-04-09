import React, { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); // Declare the state for todos


  const fetchTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsondata  = await res.json();
    setTodos(jsondata);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  console.log("todo component is rendered");

  return (
    <div>
      <h1 className="font-bold text-2xl">Todo</h1>
      {
        todos.map((todo) =>(
            <div key={todo} className="bg-gray-100 rounded p-2 m-2">
                <h1>{todo.title}</h1>
            </div>
        ))
      }
    </div>
  );
};

export default Todo;
