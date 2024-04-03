import React from "react";
import ReactDOM from "react-dom/client";

//Single Element Creation
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// console.log(root);

///Multiple Element creation
const multiple = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 is one"),
    React.createElement("h1", {}, "H1 is two"),
  ])
);
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(multiple);

// Do it Yourself
const DYI = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
]);

let root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(DYI);

// Parcel is a dev Dependency which we only want for development and testing
// so to install dev dependencies we use -D while installing

// React is a Dependency which is required for running of the app properly

// * JSX is converted to react elements by babel(js Lib)

// * JSX is not html with Js it is HTML like syntax only

// ! Read more about JSX tags

const head = (
  <h1 id="head" tabIndex="5">
    Namastey Sai from React❤️
  </h1>
);

root3 = ReactDOM.createRoot(document.getElementById("root"));

root3.render(head);

// * JSX (transpiled before it reached the JS Engine) - Parcel
// * Parcel give the transpile job to - Babel

// * React Components
// * -> Class based Components
// * -> Functional Components

// * Functional Components
function HeadingContainer() {
  return <h1>Returns a JSX</h1>;
}
