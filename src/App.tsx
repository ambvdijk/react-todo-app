import React from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Header } from "./components";
import { useSelector } from "react-redux";
import { Selectors } from "./store";

export function App() {
  const theme = useTheme();
  const todos = useSelector(Selectors.selectTodos);
  return (
    <section className="App">
      {theme.palette.mode}
      <Header></Header>
      <ToDoList todos={todos}></ToDoList>
      <Button variant="contained">Hello World</Button>
    </section>
  );
}
