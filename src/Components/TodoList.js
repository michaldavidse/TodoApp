import React from 'react';
import ToDo from './Todo';
import Filter from './Filter';


function ToDoList({ toDoList, handleToggle, deleteToDo, show }) {
    var list = toDoList.map(todo => {
        return (
            <li key={todo.id}>
                <ToDo todo={todo} handleToggle={handleToggle} deleteToDo={deleteToDo} />
            </li>
        )
    });
    return (
        <div>
            <div className='filters'><Filter name="alles" onClick={show("alles")} />
                <Filter name="Te doen" onClick={show("todo")} />
                <Filter name="Done" onClick={show("done")} />
            </div>


            <div className='todoList'>
                <ul>
                    {list}
                </ul>
            </div>

            <div>
                <button onClick={deleteToDo}>Lijstje opkuisen</button>
            </div>
        </div>
    );
};

export default ToDoList;