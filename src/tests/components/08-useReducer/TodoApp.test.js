import {shallow} from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";

describe('Test on <TodoApp/>', () => {
    const wrapper = shallow(<TodoApp/>);

    test('Should display correctly', () => {
       expect(wrapper).toMatchSnapshot();
    })
})