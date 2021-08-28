import todoReducer from "../../../components/08-useReducer/todoReducer";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Tests on todoReducer', () => {
    test('Should return the default state', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Should add a Todo', () => {
        const newTodo = {
            id: 3,
            description: 'Aprender Nest',
            done: false
        }

        const state = todoReducer(demoTodos, {type: 'add', payload: newTodo});

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Should delete a Todo', () => {
        const state = todoReducer(demoTodos, {type: 'delete', payload: 1});

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });

    test('Should do the Toggle of the Todo', () => {
        const state = todoReducer(demoTodos, {type: 'toggle', payload: 1});

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1])
    })
})