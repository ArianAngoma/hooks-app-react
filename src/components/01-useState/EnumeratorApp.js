import './counter.css';
import {useState} from "react";

const EnumeratorApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });
    const {counter1, counter2} = state;

    // Se hace uso del operador spread(...state) para hacer una copia del estado anterior del state, para después sumarle 1 solo a counter1 y mantener los otros elementos iguales.
    const handleAdd = () => {
        setState({
            ...state,
            counter1: counter1 + 1
        })
    }

    return (
        <>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleAdd}>
                +1
            </button>
        </>
    )
}

export default EnumeratorApp;