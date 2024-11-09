const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World by React"
);

const child1 = React.createElement("div", { id: "child" }, heading);
const child2 = React.createElement("div", { id: "child" }, heading);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
