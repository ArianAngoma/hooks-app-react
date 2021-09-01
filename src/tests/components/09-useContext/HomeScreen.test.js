import {mount, shallow} from "enzyme";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import {UserContext} from "../../../components/09-useContext/UserContext";

describe('Test on <HomeScreen/>', () => {
    const user = {
        name: 'Arian',
        email: 'arian.angoma@tecsup.edu.pe'
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>)
        </UserContext.Provider>
    );

    test('Should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})