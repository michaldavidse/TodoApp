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
            "categorie": "privé"
        },
        {
            "id": 2,
            "task": "kuisen gelijkvloers",
            "complete": true,
            "categorie": "werk"
        },
        {
            "id": 3,
            "task": "oprommelen berging",
            "complete": false,
            "categorie": "werk"
        },];

    const [toDoList, setToDoList] = useState(data);

    const show="all";

    function addTask(userInput, categorie){
        var newTask = { id: toDoList.length + 1, task: userInput, complete: false, categorie: categorie };
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

    function count(categorie){
        let array = [...toDoList].filter(todo => todo.categorie == categorie);
        let arrayCategorieTotal = array.length;
        let arrayCategorieToDo = array.filter(todo=> !todo.complete).length;
        console.log(arrayCategorieToDo);
        return [arrayCategorieToDo,arrayCategorieTotal];
    }

    function showItems(categorie){
        if(categorie !==''){
            let array =[...toDoList].filter(todo => {
                return todo.categorie===categorie
            });
            setToDoList(array);
        }
        else{
            setToDoList(toDoList)
        }
        
    }





  return (
      <div className="App">
          <Header />
          
          <ToDoForm addTask={addTask} />

     

          <ToDoList toDoList={toDoList} handleToggle={handleToggle} deleteToDo={deleteToDo} showItems={showItems} count={count}/>
         


          <Footer />
          
    </div>
  );
}

export default App;
