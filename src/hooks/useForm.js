import {useState} from "react";

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // Funcion para limpiar el formulario
    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];
}

export default useForm;