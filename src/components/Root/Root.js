import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Quiz from "../Quiz/Quiz";
import Statistics from "../Statistics/Statistics";
import Blogs from "../Blogs/Blogs";

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
      {
        path: "/statistics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Statistics></Statistics>,
      },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/*", element: <ErrorPage></ErrorPage> },
    ],
  },
]);
