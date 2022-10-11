import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../components/Home/Home";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Quiz from "../Quiz/Quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },
      {
        path: "/quiz/:topicId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          );
        },
        element: <Quiz></Quiz>,
      },
      { path: "/*", element: <ErrorPage></ErrorPage> },
    ],
  },
]);
