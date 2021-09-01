import {mount, shallow} from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import {UserContext} from "../../../components/09-useContext/UserContext";

describe('Test on <LoginScreen/>', () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen/>
        </UserContext.Provider>
    );

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should run setUser with the expected argument', () => {
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 1,
            name: 'Arian'
        });
    });
})