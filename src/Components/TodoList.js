import React from 'react';
import ToDo from './Todo';
import ButtonDelete from './ButtonDelete';


function ToDoList({ toDoList, handleToggle, deleteToDo, show}) {
    var list;
    if(show === "all"){
        list = toDoList.map(todo => {
            return (
                <li key={todo.id}>
                    <ToDo todo={todo} handleToggle={handleToggle} />
                </li>
            )
        });
    }
    else{
        list = toDoList.map(todo => {
            if(todo.categorie === show){
                return (
                    <li key={todo.id}>
                        <ToDo todo={todo} handleToggle={handleToggle}/>
                    </li>
                )
            }
            
        });
    }

    
    
    return (                   
            <div className='todoList'>
            <ButtonDelete show={show} deleteToDo={deleteToDo}/>
            <h2>To do's:</h2>
                <ul>
                    {list}
                </ul>           
        </div>

    );
};

export default ToDoList;