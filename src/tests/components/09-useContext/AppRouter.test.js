import {mount} from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import {UserContext} from "../../../components/09-useContext/UserContext";

describe('Test on <AppRouter/>', () => {
    const user = {
        id: 1, name: 'Arian'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})