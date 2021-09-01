import {mount, shallow} from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import {demoTodos} from "../../fixtures/demoTodos";
import {act} from "@testing-library/react";

describe('Test on <TodoApp/>', () => {
    const wrapper = shallow(<TodoApp/>);

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should add a ToDo', () => {
        const wrapper = mount(<TodoApp/>);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
    });
})