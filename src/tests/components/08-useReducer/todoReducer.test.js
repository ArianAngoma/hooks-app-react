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
    })
})