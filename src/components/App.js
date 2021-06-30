import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "./App.css";
const App = () => (
  <div class="center">
    <h1>Todo List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
