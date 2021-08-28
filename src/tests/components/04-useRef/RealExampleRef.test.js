import {shallow} from "enzyme";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe('Test to component <RealExampleRef/>', () => {
    const wrapper = shallow(<RealExampleRef/>);

    test('Should display the component <RealExampleRef/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHook').exists()).toBe(false);
    });

    test('Should display the component <MultipleCustomHoks/> correctly', () => {
        const button = wrapper.find('button');
        button.simulate('click');

        expect(wrapper.find('MultipleCustomHook').exists()).toBe(true);
    });
})