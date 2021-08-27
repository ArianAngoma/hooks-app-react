import {renderHook, act} from "@testing-library/react-hooks";
import useEnumerator from "../../hooks/useEnumerator";

describe('Test to custom hook useEnumerator', () => {
    test('Should have the counter at 100', () => {
        const {result} = renderHook(() => useEnumerator(100));

        expect(result.current.counter).toBe(100);
        /*expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        expect(typeof result.current.decrement).toBe('function');*/
    });

    test('Should increment counter by 1', () => {
        const {result} = renderHook(() => useEnumerator(100));
        const {increment} = result.current;

        act(() => {
            increment();
        });

        expect(result.current.counter).toBe(101);
    });

    test('Should decrement by 1', () => {
        const {result} = renderHook(() => useEnumerator(100));
        const {decrement} = result.current;

        act(() => {
            decrement();
        });

        expect(result.current.counter).toBe(99);
    });

    test('Should reset the counter', () => {
        const {result} = renderHook(() => useEnumerator(100));
        const {increment, reset} = result.current;

        act(() => {
            increment();
            reset();
        });

        expect(result.current.counter).toBe(100);
    })
})