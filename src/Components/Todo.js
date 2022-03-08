import React from 'react';

const ToDo = ({ todo, handleToggle, deleteToDo }) => {

    function onClickComplete (event){
        console.log(event.currentTarget.parentNode.id)
        handleToggle(event.currentTarget.id);
    }

    function onClickDelete(event){
        deleteToDo(event.currentTarget.parentNode.parentNode.id);
    }


    return (
        <div className="todoItem"> 
        <span className={todo.complete ? "completed" : ""} onClick={onClickComplete} id={todo.id} > 
       {todo.task} <i className={todo.complete ? "fa-regular fa-circle-check" : "fa-regular fa-circle" } ></i></span>
       </div> 
     
    );

};


export default ToDo;
