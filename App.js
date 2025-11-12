import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
/* 
 <div id="parent">
    <div id="child1">
    <h1>Hello from h1</h1>
    <h2>Hello from h2</h2>
    </div>
    <div id="child2">
    <h1>Hello from h1</h1>
    <h2>Hello from h2</h2>
    </div>
 </div>

  

*/
const parent = React.createElement(
  "div",
  { id: "parent1" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { key: "child1-h1-1" }, "Hello from h1"),
    React.createElement("h1", { key: "child1-h1-2" }, "Hello from h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "child2-h1-1" }, "Hello from h1"),
    React.createElement("h1", { key: "child2-h1-2" }, "Hello from h1"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello from React!!!"
);
// console.log(parent);

const root = createRoot(document.getElementById("root"));
root.render(parent);
