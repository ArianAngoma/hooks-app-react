import useEnumerator from "../../hooks/useEnumerator";
import './counter.css';

const EnumeratorWithCustomHook = () => {
    // Llamado y desestructuración del custom hook useEnumerator();
    const {state: counter, increment, reset, decrement} = useEnumerator(100);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr/>

            <button onClick={() => increment(2)} className='btn'>+1</button>
            <button onClick={reset} className='btn'>Reset</button>
            <button onClick={() => decrement(2)} className='btn'>-1</button>
        </>
    )
}

export default EnumeratorWithCustomHook;