import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');
    const [categorie, setCategorie]= useState('');

    function handleChange(event) {
        var message = document.getElementById("errorMessage");
        message.classList.remove("visible");
        message.classList.add("hidden");
        setUserInput(event.currentTarget.value);
        setCategorie(event.currentTarget.nextSibling.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (userInput.trim().length == 0) {
            var message = document.getElementById("errorMessage");
            message.classList.remove("hidden");
            message.classList.add("visible");
        }
        else {
            addTask(userInput,categorie);
            setUserInput("");
            setCategorie("");
        }
    }


    return (
        <form onSubmit={handleSubmit} className='todoForm'>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Nieuwe to do" />
            <select  value={categorie}onChange={handleChange} name="categorie">
                <option value="privé">Privé</option>
                <option value="werk">Werk</option>
            </select>

            <button> <i className="fa-solid fa-plus  fa-2x"></i></button>
            <p className=" hidden" id="errorMessage"> Vul een to do in </p>
        </form>

    );
};

export default ToDoForm;