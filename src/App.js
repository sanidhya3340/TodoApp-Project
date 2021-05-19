import React, { useState, useEffect } from "react";
import './App.css';
import Header from './myComponents/Header'
import AddTodo from './myComponents/AddTodo'
import Todos from './myComponents/Todods'
import { Footer } from './myComponents/Footer'
import {About} from './myComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo)

  const onDelete = (todo) => {
    // console.log("I am on delete prop", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addTodo = (title, desc) => {
    // console.log("I am adding:",title,desc)
    let sno
    if (todos.length === 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    // console.log(myTodo)

  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <Router>
        <Header title="TodoList" searchBar={false} />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
        </Switch>



        <Footer />
      </Router>
    </>
  );
}

export default App;
