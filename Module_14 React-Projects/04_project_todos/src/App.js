import React from "react";
import Counter from "./features/counter/Counter";
import TodoList from "./features/Todoslice/TodoList";
import AddTodoForm from "./features/Todoslice/AddTodoForm";


function App() {
  return (
    <div className="App">
      <h1>hello redux</h1>
      <Counter/>
      <AddTodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
