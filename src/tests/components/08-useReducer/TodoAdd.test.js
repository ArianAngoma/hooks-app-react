import {mount, shallow} from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe('Test on <TodoAdd/>', () => {
    const handleAddTodo = jest.fn();

    const wrapper = mount(
        <TodoAdd handleAddTodo={handleAddTodo}/>
    );

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should NOT call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({
            preventDefault() {
            }
        });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Should call the function handleAddTodo', () => {
        const value = 'Aprender React';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({
            preventDefault() {
            }
        });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            description: value,
            done: false
        });
    });
})