import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  children,
} from "react-router-dom";
import { Header } from "./components/Header.js";
import { AboutUs } from "./components/AboutUs.js";
import { Contact } from "./components/Contact.js";
import { Error } from "./components/Error.js";
import Body from "./components/Body.js";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
