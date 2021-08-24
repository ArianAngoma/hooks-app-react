// Estado inicial
const initialState = [{
    id: 1,
    todo: 'Trabajo',
    done: false
}];

// reducer -> se envia el estado inicial y la accion a realizar, en este caso agregar un nueo Todo
const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }
    return state;
}

// Ejecutamos el Reducer
let todos = todoReducer();

// Nuevo Todo para agregar
const newTodo = {
    id: 2,
    todo: 'Estudiar',
    done: false
}

// Acción que se enviará a la función Reducer
const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);