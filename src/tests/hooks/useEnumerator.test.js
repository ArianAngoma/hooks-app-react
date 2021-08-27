import {renderHook} from "@testing-library/react-hooks";
import useEnumerator from "../../hooks/useEnumerator";

describe('Test to custom hook useEnumerator', () => {
    test('Should return the default values', () => {
        const {result} = renderHook(() => useEnumerator());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
    })
})