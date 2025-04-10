import React, { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState(""); // Declare the state for text
  const [todos, setTodos] = useState([]); // Declare the state for todos


  const fetchTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsondata  = await res.json();
    setTodos(jsondata);
  };

  useEffect(() => {
    fetchTodo();
    console.log("use effect called")
  }, []);

  console.log("component rendered");

  return (
    <div>
      <h1 className="font-bold text-2xl">Todo</h1>
      {
        todos.map((todo) =>(
            <div key={todo.id} className="bg-gray-100 rounded p-2 m-2">
                <h1>{todo.title}</h1>
            </div>
        ))
      }
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="search..." className="border border-gray-300 rounded p-2 m-2" />
      <input onChange={(e) => setText(e.target.value)} type="text" placeholder="text..." className="border border-gray-300 rounded p-2 m-2" />
    </div>
  );
};

export default Todo;
