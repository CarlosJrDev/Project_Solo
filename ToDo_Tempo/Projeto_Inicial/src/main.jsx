import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//  1 Configurando Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Todo from "./pages/Todo.jsx";
import Previsao from "./pages/Previsao.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //  3 - Criação de Página de ERRO!
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "previsao",
        element: <Previsao />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
