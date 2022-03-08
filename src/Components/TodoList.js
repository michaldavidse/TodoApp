import React from 'react';
import ToDo from './Todo';
import Categorie from './Categorie';

function ToDoList({ toDoList, handleToggle, deleteToDo, count, showItems}) {
    var list = toDoList.map(todo => {
        return (
            <li key={todo.id}>
                <ToDo todo={todo} handleToggle={handleToggle} deleteToDo={deleteToDo} />
            </li>
        )
    });

    
    return (
        <div>
            <div className="categories">
                <Categorie name="privé" count={count} showItems={showItems}/>
                <Categorie name="werk" count={count} showItems={showItems}/>
            </div>


            <div className='todoList'>
                <ul>
                    {list}
                </ul>

                <div>
                <button onClick={deleteToDo}>Lijstje opkuisen</button>
            </div>
            </div>

           
        </div>
    );
};

export default ToDoList;