import {renderHook, act} from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe('Test to custom hook useForm', () => {
    const initialForm = {
        name: 'Arian',
        email: 'arian.angoma@tecsup.edu.pe'
    }

    test('Should return a default form', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof values).toBe('object');
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Should change the value of the form', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Andrea'
                }
            });
        });

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'Andrea'});
    });

    test('Should reset the form with reset', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Andrea'
                }
            });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    })
})