import React from 'react';

const ToDo = ({ todo, handleToggle }) => {

    function onClickComplete (event){
        handleToggle(event.currentTarget.id);
    }



    return (
        <div className={"todoItem"}> 
        <span className={todo.complete ? "completed" : ""} onClick={onClickComplete} id={todo.id} > 
        <i className={todo.categorie +' '+ (todo.complete ? "fa-solid fa-circle-check" : "fa-regular fa-circle" )} ></i>
         {todo.task} </span>
       </div> 
     
    );

};


export default ToDo;
