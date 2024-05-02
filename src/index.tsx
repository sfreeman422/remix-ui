import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HowItWorks } from "./how-it-works/How-It-Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops! Not found.</div>,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
