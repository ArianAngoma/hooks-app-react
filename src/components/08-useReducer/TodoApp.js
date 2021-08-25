import './styles.css';
import {useReducer} from "react";
import todoReducer from "./todoReducer";

const initialState = {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
}

const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Arian</li>
            </ul>
        </div>
    )
}

export default TodoApp;