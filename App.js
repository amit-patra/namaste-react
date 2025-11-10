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
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h1", {}, "Hello from h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h1", {}, "Hello from h1"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello from React!!!"
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
