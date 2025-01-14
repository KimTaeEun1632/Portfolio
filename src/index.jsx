import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import ProjectDetail from "./routes/projectDetail/project-[projectId]";
import Main from "./Components/Main/Main";
import items from "./mock.json";
import Login from "./routes/login";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main items={items} />,
      },
      {
        path: "projectDetail/:projectId", // :projectId를 사용하여 URL 파라미터로 설정
        element: <ProjectDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
