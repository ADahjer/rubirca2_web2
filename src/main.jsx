import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";

// importacion de las paginas
import CreateManilla from "./pages/CreateManilla";
import Checkout from "./pages/Checkout";

const pedidos = [];

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateManilla pedidos={pedidos} />,
  },
  {
    path: "/checkout",
    element: <Checkout pedidos={pedidos} />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
