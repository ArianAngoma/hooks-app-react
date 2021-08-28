import {shallow} from "enzyme";
import MultipleCustomHook from "../../../components/03-examples/MultipleCustomHook";
import useFetch from "../../../hooks/useFetch";
import useEnumerator from "../../../hooks/useEnumerator";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useEnumerator');


describe('Test to component <MultipleCustomHoks/>', () => {
    beforeEach(() => {
        useEnumerator.mockReturnValue({
            counter: 10,
            increment: () => {
            }
        });
    })

    test('Should display the component <MultipleCustomHoks/> correctly', () => {
        useFetch.mockReturnValue({
            data: null, loading: true, error: null
        });

        const wrapper = shallow(<MultipleCustomHook/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Should display the information', () => {
        useFetch.mockReturnValue({
            data: [{author: 'Arian', quote: 'Hola Mundo'}], loading: false, error: null
        });

        const wrapper = shallow(<MultipleCustomHook/>);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Arian');
    })
})