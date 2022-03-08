import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');

    function handleChange(event) {
        var message = document.getElementById("errorMessage");
            message.classList.remove("visible");
            message.classList.add("hidden");
        setUserInput(event.currentTarget.value)
    }

   function handleSubmit (event){
        event.preventDefault();
        if(userInput.trim().length == 0){
            var message = document.getElementById("errorMessage");
            message.classList.remove("hidden");
            message.classList.add("visible");
        }
        else{
            addTask(userInput);
            setUserInput("");
        }        
    }


    return (
        <form onSubmit={handleSubmit} className='todoForm'>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Nieuwe to do" />
            <button> <i className="fa-solid fa-plus  fa-2x"></i></button>
            <p className=" hidden" id="errorMessage"> vul een to do in </p>
        </form>
  
    );
};

export default ToDoForm;