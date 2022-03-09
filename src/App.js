import React, { useState } from 'react';
import './App.css';

//componenten
import Header from "./Components/Header";
import ToDoList from './Components/TodoList';
import ToDoForm from './Components/TodoForm';
import Categorie from './Components/Categorie';
import Footer from './Components/Footer';


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
            "task": "mails beantwoorden",
            "complete": false,
            "categorie": "werk"
        },];

    const [toDoList, setToDoList] = useState(data);
    const[show, setShow] = useState("all");

    function addTask(userInput, categorie){
        var newTask = { id: Date.now(), task: userInput, complete: false, categorie: categorie };
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
        if(show=="all"){
            todoListCopy = todoListCopy.filter(todo => !todo.complete);
        }
        
          setToDoList(todoListCopy); 
    }

    function count(categorie){
        let array = toDoList.filter(todo => todo.categorie == categorie);
        let arrayCategorieTotal = array.length;
        let arrayCategorieToDo = array.filter(todo=> !todo.complete).length;
        return [arrayCategorieToDo,arrayCategorieTotal];
    }


    function showCategorie(event){
        event.preventDefault();
        let categorie = event.currentTarget.getAttribute('name') ;
        let categories = document.getElementsByClassName('categorie');
        console.log(categories.length);
        for(let i = 0; i<categories.length; ++i){
            console.log(categories[i]);
            categories[i].classList.remove('selected');
        }
        if(show === categorie){
            setShow("all");
        }
        else{
            event.currentTarget.classList.add("selected");
            setShow(categorie);
        }
    }





  return (
      <div className="App">
          <Header />

          <ToDoForm addTask={addTask} />
          <div className="categories">
                <Categorie name="privé" count={count} showCategorie={showCategorie}/>
                <Categorie name="werk" count={count} showCategorie={showCategorie}/>
            </div>

          <ToDoList toDoList={toDoList} handleToggle={handleToggle} deleteToDo={deleteToDo} show={show} count={count}/>
         


          <Footer />
          
    </div>
  );
}

export default App;
