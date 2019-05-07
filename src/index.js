import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
//tells our bundling tool such as webpack to put all our pieces together in one bundle
var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  destination
); // what is being import and the destination of the import
