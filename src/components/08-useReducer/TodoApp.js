import './styles.css';
import {useEffect, useReducer} from "react";
import todoReducer from "./todoReducer";
import useForm from "../../hooks/useForm";

const init = () => {
    /*return [{
        id: new Date().getTime(),
        description: 'Aprender React',
        done: false
    }]*/

    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'>
                                    <p className='text-center'>{i + 1}. {todo.description}</p>
                                    <button className='btn btn-danger'>Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input type='text'
                               name='description'
                               className='form-control'
                               placeholder='Tarea'
                               autoComplete='off'
                               onChange={handleInputChange}
                               value={description}/>

                        <button className='btn btn-outline-primary mt-1 w-100'
                                type='submit'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp;