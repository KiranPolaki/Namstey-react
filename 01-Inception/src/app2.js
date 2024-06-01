import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header.js";
import { AboutUs } from "./components/AboutUs.js";
import { Contact } from "./components/Contact.js";
import { Error } from "./components/Error.js";
import { Body } from "./components/Body.js";
import { RestarentMenu } from "./components/RestaurentMenu.js";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Body /> },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
      {
        path: "restaurent/:resid",
        element: <RestarentMenu></RestarentMenu>,
      },
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
