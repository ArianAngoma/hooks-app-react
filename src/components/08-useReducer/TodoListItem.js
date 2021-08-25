import React from "react";

const TodoListItem = React.memo(({todo, index, handleDelete, handleToggle}) => {
    console.log('TodoListItem de nuevo D:');

    return (
        <li
            key={todo.id}
            className='list-group-item'>
            <p className={`${todo.done && 'complete'}`}
               onClick={() => {
                   handleToggle(todo.id)
               }}>{index + 1}. {todo.description}</p>
            <button className='btn btn-danger'
                /*Se envía el handleDelete como callback porque recibe un argumento*/
                    onClick={() => {
                        handleDelete(todo.id)
                    }}>Borrar
            </button>
        </li>
    )
})

export default TodoListItem;