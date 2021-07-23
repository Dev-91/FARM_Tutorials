import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './components/TodoListView';


function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Read all todos
  useEffect(() => {
    axios.get("http://localhost:8000/api/todo")
      .then(res => {
        setTodoList(res.data)
      })
  }, []);

  // Post a todo
  const addTodoHandler = () => {
    axios.post("http://localhost:8000/api/todo/", {
      "title": title,
      "description": desc
    })
    .then(res => console.log(res))
  };

  return (
    <div className="App">
      <h1 className="title">Task Manager</h1>
      <h6 className="title">FASTAPI - React - MongoDB</h6>
      <div className="">
        <h5 className="">Add Your Task</h5>
        <span className=""> 
          <input className="" onChange={event => setTitle(event.target.value)} placeholder='Title'/> 
          <input className="" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
        <button className="" onClick={addTodoHandler}>Add Task</button>
        </span>
        <h5 className="">Your Tasks</h5>
        <div >
        <TodoView todoList={todoList} />
        </div>
      </div>
      <h6 className="" >Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
