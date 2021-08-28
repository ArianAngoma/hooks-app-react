import {shallow} from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Test on <TodoListItem/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call the function handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('Should call the function handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('Should display the text correctly', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`${1}. ${demoTodos[0].description}`);
    });

    test('Should have the complete class', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={demoTodos[0]}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
})