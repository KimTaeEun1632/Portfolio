import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import ProjectDetail from "./routes/projectDetail/project-[projectId]";
import Main from "./Components/Main/Main";
import items from "./mock.json";
import Layout from "./Components/Layout/Layout";
import Board from "./routes/board/board";
import BoardContent from "./routes/board/[id]";
import BoardLayout from "./Components/Layout/BoardLayout";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main items={items} />,
      },
      {
        path: "projectDetail/:projectId", // :projectId를 사용하여 URL 파라미터로 설정
        element: <ProjectDetail />,
      },
      {
        path: "board",
        element: <BoardLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Board />,
          },
          {
            path: ":id",
            element: <BoardContent />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
