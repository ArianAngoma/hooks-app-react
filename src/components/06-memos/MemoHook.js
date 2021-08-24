import {useMemo, useState} from "react";
import useEnumerator from "../../hooks/useEnumerator";
import heavyProcess from "../../helpers/heavyProcess";
import '../02-useEffect/effects.css';

const MemoHook = () => {
    const {counter, increment} = useEnumerator(1000);
    const [show, setShow] = useState(true);

    // useMemo -> Guarda el valor de una función, y solo vuelve a ejecutar la funcion cuando la dependencia cambia.
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter <small>{counter}</small></h3>
            <hr/>

            <p>{memoHeavyProcess}</p>

            <button
                className='btn btn-primary'
                onClick={increment}>
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show);
                }}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default MemoHook;