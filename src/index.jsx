import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import ProjectDetail from "./routes/projectDetail/project-[projectId]";
import Main from "./Components/Main/Main";
import { data } from "./utils/data";
import Layout from "./Components/Layout/Layout";
import Board from "./routes/board/board";
import BoardContent from "./routes/board/[id]";
import BoardLayout from "./Components/Layout/BoardLayout";
import { AuthProvider } from "./contexts/AuthContext";
import LenisProvider from "./contexts/LenisProvider";
import { boardListLoader } from "./Loader";
import { addPostAction } from "./Action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main data={data} />,
      },
      {
        path: "projectDetail/:projectId", // :projectId를 사용하여 URL 파라미터로 설정
        element: <ProjectDetail items={data.project} />,
      },
      {
        path: "board",
        element: <BoardLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Board />,
            loader: boardListLoader,
            action: addPostAction,
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
    <LenisProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LenisProvider>
  </React.StrictMode>
);
