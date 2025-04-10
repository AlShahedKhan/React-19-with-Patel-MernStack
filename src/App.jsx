import "./App.css";
import Compo from "./components/ex-1/Compo";
import LightDarkMode from "./components/ex-2/LightDarkMode";
import Todo from "./components/ex-3/Todo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/ex-4/About";
import Home from "./components/Home";
import TodoDetails from "./components/ex-3/TodoDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/todo/:todoId",
    element: <TodoDetails />,
  },
]);

function App() {
  return (
    <div className="container mx-auto max-w-4xl">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
