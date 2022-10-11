import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faICursor } from "@fortawesome/free-solid-svg-icons";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{ path: "/", element: <Home></Home> }],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
