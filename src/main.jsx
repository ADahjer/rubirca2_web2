import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";

// importacion de las paginas y componentes
import CreateManilla from "./pages/CreateManilla";
import NavigationBar from "./components/NavigationBar";

const pedidos = [];

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateManilla pedidos={pedidos} />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
