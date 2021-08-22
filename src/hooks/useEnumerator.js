import {useState} from "react";

const useEnumerator = (initialState = 10) => {
    // Uso del hook useState para inicializar el state
    const [counter, setCounter] = useState(initialState);

    // Funcion para sumar al state
    const increment = () => {
        setCounter(counter + 1);
    }

    // Funcion poner el valor por defecto al state
    const reset = () => {
        setCounter(initialState);
    }

    // Funcion para restar al state
    const decrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}

export default useEnumerator;