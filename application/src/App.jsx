import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";

import Home from "./Layouts/Dashboard";

function ErrorPage() {
  let error = useRouteError()
  console.log(error);
  return (
    <>
      <p>Dang!</p>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
      errorElement: (
        <>
          <ErrorPage />
        </>
      ),
    },
    {
      path: "leads",
      element: (
        <>
          <Home />
        </>
      ),
      errorElement: (
        <>
          <ErrorPage />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
