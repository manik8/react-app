const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, 
  [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag")
  ]
  ),
  React.createElement("div", { id: "child2" }, 
  [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag")
  ]
  )
  ]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
