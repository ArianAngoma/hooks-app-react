import {shallow} from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Test on component <TodoList/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList todos={demoTodos}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}/>
    );

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should have two <TodoListItem/>', () => {
        console.log(wrapper.find('TodoListItem').length);
    });
})