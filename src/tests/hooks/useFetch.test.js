import {renderHook} from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe('Test to custom hook useFetch', () => {
    test('Should return the default information', () => {
        const {result} = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('Should return the information of the successful result', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        await waitForNextUpdate({timeout: 5000});
        const {data, loading, error} = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('Should handle the error', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch(`https://reqres.in/apierror/users?page=2`));
        await waitForNextUpdate({timeout: 5000});
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    });
})