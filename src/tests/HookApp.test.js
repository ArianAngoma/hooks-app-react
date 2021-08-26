import {shallow} from "enzyme";
import HooksApp from "../HooksApp";

describe('Test to component <HookApp/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HooksApp/>);
    });

    test('Should display the component <HooApp/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})