import React, { useState } from 'react';
import './App.css';

//componenten
import { Header, Footer } from "./Components/Header";
import ToDoList from './Components/TodoList';
import ToDoForm from './Components/TodoForm';


function App() {
    const data = [
        {
            "id": 1,
            "task": "boodschappen",
            "complete": true,
            "person": "John"
        },
        {
            "id": 2,
            "task": "kuisen gelijkvloers",
            "complete": true,
            "person": "John"
        },
        {
            "id": 3,
            "task": "oprommelen berging",
            "complete": false,
            "person": "John"
        },];

    const [toDoList, setToDoList] = useState(data);

    function addTask(userInput){
        var newTask = { id: toDoList.length + 1, task: userInput, complete: false };
        setToDoList([...toDoList, newTask]);
       }
    
    function handleToggle(id){
        let todoListCopy = toDoList.map(todo => {
            return (
                todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo}
                );
    
         });
          setToDoList(todoListCopy);
    }

    function deleteToDo(){
        let todoListCopy = [...toDoList];
        todoListCopy = todoListCopy.filter(todo => !todo.complete);
          setToDoList(todoListCopy); 
    }

    function show(filter){
        console.log(filter);
    }



    



  return (
      <div className="App">
          <Header />
          
          <ToDoForm addTask={addTask} />

     

          <ToDoList toDoList={toDoList} handleToggle={handleToggle} deleteToDo={deleteToDo} show={show}/>
         


          <Footer />
          
    </div>
  );
}

export default App;
