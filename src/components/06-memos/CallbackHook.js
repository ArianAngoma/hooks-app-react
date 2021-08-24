import {useCallback, useEffect, useState} from "react";
import ShowIncrement from "./ShowIncrement";
import '../02-useEffect/effects.css';

const CallbackHook = () => {
    // useCallback -> nos permite devolver un callback memorizado, que solo se vuelve a ejecutar si sus parametros cambian.

    const [counter, setCounter] = useState(10);

    /*const increment = () => {
        setCounter(counter + 1)
    }*/

    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter]);

    useEffect(() => {
        // ???
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}

export default CallbackHook;