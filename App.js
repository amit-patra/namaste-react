import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello React-1 🫵");
// console.log(heading);

// *********** JSX ******************************
// TODO: JSX (tranpiled before it reaches the JS ) - PARCEL - Babel
// * JSX => Babel Transpile it to React.createElement => ReactElement-JS Object => HTMLElement(render)
/*const jsxHeading = (
  <h1 id="heading" className="hello-tag" tabIndex="1">
    Hello React Using JSX 🫵
  </h1>
); */

// React Functional Component (Which return JSX)
const num = 150;
const TitleComponent = <h1>This is TitleComponent ✌️ </h1>;
const BodyComponent = () => <h1>This is body Component....</h1>;

//* Component Composition ( Component Inside a component)
const HeadingComponent = () => (
  <div id="container">
    {TitleComponent}

    {/* Same Example (Various type of uses */}
    {BodyComponent()}
    <BodyComponent />
    <BodyComponent></BodyComponent>

    <h1>Count: {num + 50}</h1>
    <h1 id="heading" className="hello-tag" tabIndex="1">
      Hello This is Functional Component 🦖
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
