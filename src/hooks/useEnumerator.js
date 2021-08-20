import {useState} from "react";

const useEnumerator = (initialState = 10) => {
    // Uso del hook useState para inicializar el state
    const [state, setState] = useState(initialState);

    // Funcion para sumar al state
    const increment = (factor = 1) => {
        setState(state + factor);
    }

    // Funcion poner el valor por defecto al state
    const reset = () => {
        setState(initialState);
    }

    // Funcion para restar al state
    const decrement = (factor = 1) => {
        setState(state - factor);
    }

    return {
        state,
        increment,
        reset,
        decrement
    }
}

export default useEnumerator;