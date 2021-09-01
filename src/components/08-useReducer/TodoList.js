import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = React.memo(({todos, handleDelete, handleToggle}) => {
    console.log('TodoList de nuevo D:')

    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                    <TodoListItem key={todo.id}
                                  todo={todo}
                                  index={i}
                                  handleDelete={handleDelete}
                                  handleToggle={handleToggle}/>
                ))
            }
        </ul>
    )
})

TodoList.displayName = 'TodoList';

export default TodoList;