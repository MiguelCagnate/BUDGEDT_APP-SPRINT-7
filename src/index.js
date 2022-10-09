import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import { App } from "./pages/App";
import { AppPage } from "./pages/AppPage";
import reportWebVitals from "./reportWebVitals";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MyApp",
    element: <AppPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
